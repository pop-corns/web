<template>
  <div class="blogpost">
    <div class="container">
      <div class="row">
        <h1>{{blogpost.fields.title}}</h1>
        <img :src="image" />
        <p>
          {{blogpost.fields.content}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    blogpost: {
      type: Object,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
