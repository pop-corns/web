<template>
  <footer id="subscribe">
    <div class="container">
      <!-- <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-heading">
            <h4>
              ⚡️ Waitlist ⚡️
            </h4>
            <p v-if="!$device.isMobile" style="color: #fff; font-size: 1rem; text-align: center;">
              Popcorns is still under development. The next phase will be a closed Beta. You will receive a personal invitation for the closed Beta by joining the Waitlist.
            </p>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-3">
          <form id="search">
            <div class="row">
              <div class="col-lg-6 col-sm-6">
                <fieldset>
                  <input
                    type="email"
                    name="email"
                    class="email"
                    placeholder="Email Address..."
                    autocomplete="off"
                    required
                    v-model="email"
                  />
                </fieldset>
              </div>
              <div class="col-lg-6 col-sm-6">
                <fieldset>
                  <button type="button" class="main-button" @click="subscrie()">
                    Join Waitlist <i class="fa fa-angle-right"></i>
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div> -->
      <div class="col-lg-12">
        <div class="copyright-text">
          <p>Copyright © 2022 Popcorns</p>
          <p><a href="#">Terms of Use</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">Privacy Policy</a>   </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import qs from 'qs';

export default {
  data() {
    return {
        email: ""
    }
  },
  methods: {
    subscrie(){
      const reqBody = qs.stringify({
        "email": this.email
      });
      this.$axios.post("https://forms.hubspot.com/uploads/form/v2/25590093/fea8eb6e-40d0-4b8b-954c-ccd7774f3944", reqBody, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(() => {
        this.track("Event", {name: "subscribe"});
        this.email = "";
      });
    }
  }
};
</script>