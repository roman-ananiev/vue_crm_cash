<template>
  <div>
    <component :is="layout"><router-view /> </component>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  name: "App",
  components: {
    EmptyLayout,
    MainLayout
  },
  computed: {
    layout() {
      console.log(this.$route.meta.layout);
      return this.$route.meta.layout || "EmptyLayout";
    }
  }
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
