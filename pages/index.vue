<template>
  <div>
    <titlearea
      :title="welcome.title"
      :strings="welcome.strings"
      :subtitle="welcome.subtitle"
      :ctabuttons="welcome.ctas"
      :heroimage="heroimage"
    ></titlearea>
    <benefits :benefits="benefits"></benefits>
    <services :services="services" :heading="servicesheading"></services>
    <aboutus :aboutus="aboutus"></aboutus>
  </div>
</template>
<script>
import { createClient } from "~/plugins/contentful.js";
import "animate.css";

const client = createClient();
export default {
  asyncData() {
    return Promise.all([
      client.getEntries({
        content_type: "welcomemessaging",
        order: "-sys.createdAt",
      }),
      client.getEntries({
        content_type: "services",
        order: "fields.order",
      }),
      client.getEntries({
        content_type: "aboutus",
        order: "fields.order",
      }),
      client.getEntries({
        content_type: "headings",
        order: "-sys.createdAt",
      }),
      client.getEntries({
        content_type: "benefits",
        order: "fields.order",
      }),
    ])
      .then(([welcomemessaging, services, aboutus, headings, benefits]) => {
        // debugger;
        return {
          welcome: welcomemessaging.items[0].fields,
          heroimage: welcomemessaging.includes.Asset[0].fields.file.url,
          services: services.items,
          aboutus: aboutus.items,
          servicesheading: headings.items.find(heading => heading.fields.ref == "Services Heading").fields,
          benefits: benefits.items
        };
      })
      .catch(console.error);
  },
};
</script>
