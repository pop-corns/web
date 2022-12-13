<template>
  <div id="benefits" class="benefits section">
    <div class="container" style="padding-top: 100px">
      <div
        class="row"
        v-for="(benefit, index) in benefits"
        :key="index"
        style="padding-bottom: 70px"
      >
        <div class="section-heading">
          <h4>{{ benefit.fields.title }}</h4>
          <img src="~/assets/images/heading-line-dec.png" alt="" />
        </div>
        <div class="col-md-5" v-if="index % 2 == 0">
          <img :src="benefit.fields.image.fields.file.url" alt="" />
        </div>
        <div
          :class="index % 2 == 0 ? 'ml-auto col-md-6' : 'col-md-6'"
          style="padding-top: 50px"
        >
          <ul
            v-if="
              benefit.fields.description &&
              benefit.fields.description.content &&
              benefit.fields.description.content[0] &&
              benefit.fields.description.content[0].content &&
              benefit.fields.description.content[0].content.length > 0
            "
          >
            <li
              :v-for="(ben, index) in benefit.fields.description.content"
              :key="index"
            >
              <p>{{ ben }}</p>
            </li>
          </ul>
        </div>
        <div class="col-md-5 ml-auto" v-if="index % 2 != 0">
          <img :src="benefit.fields.image.fields.file.url" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    benefits: {
      type: Array,
      required: true,
    },
  },
};
</script>