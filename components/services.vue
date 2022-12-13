<template>
  <div id="services" class="services section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading" v-parallax="0.1">
            <h4>{{ heading.title }}</h4>
            <img src="~/assets/images/heading-line-dec.png" alt="" />
            <p>
              {{ heading.heading }}
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
          :style="$device.isMobile ? `padding-bottom : 20px` : ''"
          class="col-lg-3"
        >
          <div class="service-item" style="height: 100%">
            <img
              v-if="service.fields.image"
              :src="service.fields.image.fields.file.url"
              class="image"
              aria-hidden="true"
            />
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
    heading: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log(JSON.stringify(this.heading))
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