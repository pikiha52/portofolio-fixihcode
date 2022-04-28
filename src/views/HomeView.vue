<template>
  <div class="home grid justify-center items-center">
    <HelloWorld />
    <div class="phone:px-10 md:px-32">
      <p class="text-gray-600 text-4xl font-semibold py-5">Portofolio</p>

      <div class="grid md:grid-cols-3 gap-6">
        <Card />
        <Mobile />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/Website.vue";
import Mobile from "@/components/MobileApp.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Card,
    Mobile,
  },
  created() {
    document.title = "Welcome to my Portofolio";
    document.icon = '';
  },
};
</script>
