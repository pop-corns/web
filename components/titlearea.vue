<template>
  <div
    class="main-banner"
    id="top"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div
                class="left-content show-up header-text"
              >
                <div class="row">
                  <div class="col-lg-12">
                    <h2>
                      {{ title }}
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
                <img v-if="!$device.isMobile" v-parallax="0.2" :src="heroimage" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
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
};
</script>