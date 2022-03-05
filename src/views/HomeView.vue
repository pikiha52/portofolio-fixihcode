<template>
  <div class="home grid justify-center items-center">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="phone:px-10 md:px-32 py-10">
      <p class="text-gray-600 text-4xl font-semibold">Portofolio</p>

      <div class="flex gap-10 py-5">
        <a href="" class="font-light text-gray-600 hover:text-yellow-500">Website</a>
        <a @click="gotoMobile()" class="font-light text-gray-600 hover:text-yellow-500">Mobile apps</a>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <Card v-bind:src="'home'" title="Portofolio Title" />
      </div>

      <!-- <div class="grid md:grid-cols-3 gap-6">
        <Mobile />
      </div> -->

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/Website.vue'
import Mobile from '@/components/MobileApp.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Card,
    Mobile,
  },
  methods: {
    gotoMobile(){
      this.$router.push('/about');
    }
  }
}

</script>
