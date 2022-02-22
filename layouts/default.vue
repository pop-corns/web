<template>
  <div>
    <!-- <preloader></preloader> -->
    <headerarea :menu-items="menuitems"></headerarea>
    <Nuxt />
    <footerarea></footerarea>
  </div>
</template>
<script>
import { createClient } from "~/plugins/contentful.js";
const client = createClient();
export default {
  data() {
    return {
      menuitems: [],
    };
  },
  mounted() {
    return Promise.all([
      client.getEntries({
        content_type: "menuItem",
        order: "fields.order",
      }),
    ])
      .then(([menuitems]) => {
        this.menuitems = menuitems.items;
      })
      .catch(console.error);
  },
};
</script>
  