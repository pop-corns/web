<template>
  <div>
    <blogpost :blogpost="blogpost" :image="image"></blogpost>
  </div>
</template>
// <script>
import { createClient } from "~/plugins/contentful.js";
import "animate.css";
mixpanel.track("Test");
const client = createClient();
export default {
  asyncData() {
    return Promise.all([
      client.getEntries({
        content_type: "blogpost",
        order: "-sys.createdAt",
      })
    ])
      .then(([blogposts]) => {
        return {
          blogpost: blogposts.items[0],
          image: blogposts.includes.Asset[0].fields.file.url,
        };
      })
      .catch(console.error);
  },

};

</script>
