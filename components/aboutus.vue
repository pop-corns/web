<template>
    <div id="about" class="about-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="section-heading">
            <h4>Become a <em>Product Hero</em> With</h4>
            <img src="~/assets/images/heading-line-dec.png" alt="">
          </div>
          <div class="row">
            <div v-for="(about, index) in aboutus" :key="index" class="col-lg-6">
              <div class="box-item">
                <h4><a :href="about.fields.link">{{about.fields.title}}</a></h4>
                <p>{{about.fields.subtitle}}</p>
              </div>
            </div>
            <div class="col-lg-12">
                <div class="green-button" style="padding-top: 25px;">
                  <a href="https://app.popcorns.io"
                    ><i class="fa fa-sign-in-alt"></i> Get Started</a
                  >
                </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="right-image">
            <img v-if="$device.isDesktop" v-parallax="0.1" src="~/assets/images/about-right-dec.svg" alt="">
            <img v-else src="~/assets/images/about-right-dec.svg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    aboutus: {
      type: Array,
      required: true,
    }
  },
};
</script>