<template>
  <!-- ***** Header Area Start ***** -->
  <header
    class="header-area header-sticky wow slideInDown"
    :class="scrollStyle"
    data-wow-duration="0.75s"
    data-wow-delay="0s"
    ref="header"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="/" class="logo">
              <img
                src="/logo.png"
                alt="Popcorns"
                style="width: 25%; height: auto"
              />
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li
                v-for="(menuitem, index) in menuItems"
                :key="index"
                class="scroll-to-section"
              >
                <a :href="menuitem.fields.href">{{ menuitem.fields.title }}</a>
              </li>
              <li>
                <div class="green-button">
                  <a href="#subscribe"
                    ><i class="fa fa-sign-in-alt"></i> Join Waitlist</a
                  >
                </div>
              </li>
            </ul>
            <a class="menu-trigger">
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->
</template>
<script>
export default {
  data() {
    return {
      headerHeight: 0,
      scrollStyle: ""
    };
  },
  props: {
    menuItems: {
      type: Array,
      required: true,
    }
  },
  mounted() {
    this.headerHeight = this.$refs.header.clientHeight;
  },
  methods: {
    handleScroll() {
      // Your scroll handling here
      let scroll = window.scrollY;

      if (scroll >= this.headerHeight + 50) {
        this.scrollStyle = "background-header";
      } else {
        this.scrollStyle = "";
      }
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>