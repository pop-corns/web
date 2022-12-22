<template>
  <div>
    <div class="container">
      <div class="row cta-container">
        <div class="green-button">
          <a href="https://app.popcorns.io"
            ><i class="fa fa-sign-in-alt"></i> Get Started for Free</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cta-container {
  padding-top: 60px;
  text-align: center;
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
      default: "",
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