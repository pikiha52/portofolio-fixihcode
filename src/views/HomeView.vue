<template>
  <div class="home grid justify-center items-center bg-yellow-500">
    <home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "HomeView",
  components: {
    Home,
  },
  created() {
    document.title = "Welcome to my Portofolio";
    document.icon = '';
  },
};
</script>
