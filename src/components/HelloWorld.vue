<template>
  <div class="grid">
    <div class="bg-yellow-500 md:w-screen phone:px-10 md:px-20">
      <div class="md:flex">
        <div class="grid-rows-none phone:py-20">
          <p class="text-left font-semibold text-5xl text-gray-700 md:py-20">
            Yo! I'm Fikih,
            I fullstack developer.
          </p>
          <p class="font-thin text-gray-600 mb-2">Let's collaborate on your next project</p>
          <div class="flex gap-5">
          <ButtonPrimary txt="Lets work" />
          <router-link to="/about">
          <ButtonOutline txt="See my curiculum vitae" />
          </router-link>
          </div>
        </div>
        <img alt="Vue logo" src="../assets/home.png" class="phone:hidden md:px-36" />
      </div>
    </div>
  </div>
  <router-view />
</template>


<script>

import ButtonPrimary from '@/components/ButtonPrimary.vue'
import ButtonOutline from '@/components/ButtonOutline.vue'



export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    ButtonPrimary,
    ButtonOutline,
  }
};


</script>

