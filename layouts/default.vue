<template>
  <div>
    <!-- <preloader></preloader> -->
    <headerarea :menu-items="menuitems"></headerarea>
    <Nuxt />
    <footerarea></footerarea>
  </div>
</template>
<script>
  !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="2Hn5GAliIMopd1oIggUlO8GGe6n8MBef";;analytics.SNIPPET_VERSION="4.15.3";
  analytics.load("2Hn5GAliIMopd1oIggUlO8GGe6n8MBef");
  analytics.page();
  }}();
import { createClient } from "~/plugins/contentful.js";
const client = createClient();

import Vue from "vue";
import mixpanelMixin from "~/mixins/mixpanel.js";
Vue.mixin(mixpanelMixin);

export default {
  data() {
    return {
      menuitems: [],
    };
  },
  mounted() {
    this.track("Page View", {
      page: this.$route.name,
    });
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
  