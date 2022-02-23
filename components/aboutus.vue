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
              <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor idunte ut labore et dolore adipiscing magna.</p> -->
              <div class="green-button" style="padding-top: 25px;">
                <a href="#subscribe">Join Waitlist</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="right-image">
            <img v-if="$device.isDesktop" v-parallax="0.1" src="~/assets/images/about-right-dec.png" alt="">
            <img v-else src="~/assets/images/about-right-dec.png" alt="">
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