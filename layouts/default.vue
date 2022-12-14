<template>
  <div>
    <!-- <preloader></preloader> -->
    <headerarea :menu-items="menuitems"></headerarea>
    <Nuxt />
    <footerarea></footerarea>
    <CookieControl>
      <template v-slot:bar>
        <h3 style="color: #fff; font-weight: 600">
          {{ $cookies.text.barTitle }}
        </h3>
        <p>
          {{ $cookies.text.barDescription }}
          <a
            style="color: #fff; font-weight: 600"
            href="https://popcorns.io/privacy-policy"
            >Privacy Policy</a
          >.
        </p>
      </template></CookieControl
    >
  </div>
</template>
    </CookieControl>
  </div>
</template>
<script>
import { createClient } from "~/plugins/contentful.js";
const client = createClient();

// import Vue from "vue";
// import mixpanelMixin from "~/mixins/mixpanel.js";
// Vue.mixin(mixpanelMixin);

export default {
  data() {
    return {
      menuitems: [],
    };
  },
  mounted() {
    // this.track("Page View", {
    //   page: this.$route.name,
    // });
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
  