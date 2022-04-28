<template>
  <div class="grid py-10 justify-center items-center px-2">
    <swiper
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="rounded-xl md:w-1/2 h-auto grid justify-center bg-gray-50">
          <img
            src="../assets/parking/1.png"
            alt=""
            class="md:w-64  rounded-md hover:opacity-20"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="rounded-xl md:w-1/2 h-auto grid justify-center bg-gray-50">
          <img
            src="../assets/parking/2.png"
            alt=""
            class="md:w-64 rounded-md hover:opacity-20"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="rounded-xl md:w-1/2 h-auto grid justify-center bg-gray-50">
          <img
            src="../assets/parking/3.png"
            alt=""
            class="md:w-64 rounded-md hover:opacity-20"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="rounded-xl md:w-1/2 h-auto grid justify-center bg-gray-50">
          <img
            src="../assets/parking/4.png"
            alt=""
            class="md:w-64 rounded-md hover:opacity-20"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="rounded-xl md:w-1/2 h-auto grid justify-center bg-gray-50">
          <img
            src="../assets/parking/5.png"
            alt=""
            class="md:w-64 rounded-md hover:opacity-20"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="rounded-xl md:w-1/2 h-auto grid justify-center bg-gray-50">
          <img
            src="../assets/parking/6.png"
            alt=""
            class="md:w-64 rounded-md hover:opacity-20"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="rounded-xl md:w-1/2 h-auto grid justify-center bg-gray-50">
          <img
            src="../assets/parking/7.png"
            alt=""
            class="md:w-64 rounded-md hover:opacity-20"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="rounded-xl md:w-1/2 h-auto grid justify-center bg-gray-50">
          <img
            src="../assets/parking/8.png"
            alt=""
            class="md:w-64 rounded-md hover:opacity-20"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "../assets/style.css";

// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
created() {
    document.title = "Booking Parkir";
  },
};
</script>
