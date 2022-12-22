<template>
  <div class="main-banner" id="top">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content show-up header-text">
                <div class="row">
                  <div class="col-lg-12">
                    <h2>
                      {{ title }}
                      <vue-typer v-if="stringsArr && stringsArr.length > 0" :text="stringsArr"></vue-typer>
                    </h2>
                    <p>
                      {{ subtitle }}
                    </p>
                  </div>
                  <div class="col-lg-12">
                    <div
                      v-for="(btn, index) in ctabuttons"
                      :key="index"
                      class="green-button first-button scroll-to-section"
                    >
                      <a :href="btn.href"
                        >{{ btn.title }} <i :class="btn.icon"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div
                class="right-image wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img
                  v-if="!$device.isMobile"
                  v-parallax="0.2"
                  :src="heroimage"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.caret .custom {
  color: red;
}
</style>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    strings: {
      type: String,
      required: true,
      default: ""
    },
    subtitle: {
      type: String,
      required: true,
    },
    ctabuttons: {
      type: Array,
      required: true,
    },
    heroimage: {
      type: String,
      required: true,
    },
  },
  computed: {
    stringsArr: {
      get() {
        if (this.strings.length > 0) {
          let strings = this.strings.split(",");
          strings = strings.map((string) => {
            return string.trim();
          });
          return strings;
        }
      },
    },
  },
};
</script>