<template>
  <div id="services" class="services section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading" v-parallax="0.1">
            <h4>Don't build it <em>just because</em> you can!</h4>
            <img src="~/assets/images/heading-line-dec.png" alt="" />
            <p>
People have ideas. Any idea, although interesting, is irrelevant without a clear understanding of what problem it solves. <br />
Focused on delivery, startups, and even mature products neglect the problem space. It's a matter of luck to build a product that matters without a clear understanding and analysis of the problem space. <br />
Popcorns empower product people by helping them focus on the problems worth solving instead of ideas that look great on slides.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-observe-visibility="visibilityChanged">
      <div class="row">
        <div
          v-for="(service, index) in services"
          :key="index"
          style="z-index: 1"
          :style="$device.isMobile ? `padding-bottom : 20px`: ''"
          class="col-lg-3"
        >
          <div class="service-item" style="height: 100%">
            <img v-if="service.fields.image" :src="service.fields.image.fields.file.url" class="image" aria-hidden="true" />
            <h4>{{ service.fields.title }}</h4>
            <p>
              {{ service.fields.subtitle }}
            </p>
            <div class="text-button">
              <a v-if="service.fields.link" :href="service.fields.link"
                >Read More <i class="fa fa-arrow-right"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.image {
  width: 200px;
  height: auto;
  padding-bottom: 20px;
  display: inline-block;
}
</style>
<script>
export default {
  data() {
    return {
      animation: "",
    };
  },
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
  methods: {
    visibilityChanged(isVisible) {
      if (isVisible) {
        this.animation = "animate__animated animate__pulse";
      } else {
        this.animation = "";
      }
    },
  },
};
</script>