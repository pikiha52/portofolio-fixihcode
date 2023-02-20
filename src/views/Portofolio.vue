<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div
        class="
          mx-auto
          max-w-2xl
          py-16
          px-4
          sm:py-24 sm:px-6
          lg:max-w-7xl lg:px-8
        "
      >
        <lightgallery
          settings="{ speed: 500, plugins: plugins }"
          :onInit="onInit"
          :onBeforeSlide="onBeforeSlide"
          class=" 
            bg-white
            grid grid-cols-1
            gap-y-10 gap-x-6
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4 xl:gap-x-8
          "
        >
          <a
            v-for="item in items"
            :key="item.id"
            className="gallery-item"
            :data-src="item.src"
          >
            <div
              class="
                aspect-w-1 aspect-h-1
                w-full
                overflow-hidden
                rounded-lg
                bg-gray-200
                xl:aspect-w-7 xl:aspect-h-8
              "
            >
              <img
                :src="item.thumb"
                class="
                  object-cover object-center
                  group-hover:opacity-75
                  w-96
                  h-96
                "
              />
            </div>
            <h3 class="mt-4 text-sm font-semibold text-gray-700">{{ item.title }}</h3>
          </a>
        </lightgallery>
      </div>
    </div>
  </div>
</template>

<script>
import Lightgallery from "lightgallery/vue";
import lgZoom from "lightgallery/plugins/zoom";
let lightGallery = null;
export default {
  name: "App",
  components: {
    Lightgallery,
  },
  watch: {
    items(newVal, oldVal) {
      this.$nextTick(() => {
        lightGallery.refresh();
      });
    },
  },
  data: () => ({
    plugins: [lgZoom],
    items: [
      {
        id: "1",
        size: "1400-933",
        title: "Recruitment",
        src: "https://drive.google.com/uc?id=1z3qeYYOkwsNdW81hexK9hpj-3Kg-TuL5",
        thumb:
          "https://drive.google.com/uc?id=1z3qeYYOkwsNdW81hexK9hpj-3Kg-TuL5",
      },
      {
        id: "2",
        size: "1400-933",
        title: "Company Profile",
        src: "https://drive.google.com/uc?id=1fLoK5ql53itTxMmj1HnE2xQXk6_v4U6m",
        thumb:
          "https://drive.google.com/uc?id=1fLoK5ql53itTxMmj1HnE2xQXk6_v4U6m",
      },
      {
        id: "3",
        size: "1400-932",
        title: "Codebook.id",
        src: "https://drive.google.com/uc?id=1Kc-Zz0vv_aOYn_-YGL_plEkL2rW40Bov",
        thumb:
          "https://drive.google.com/uc?id=1Kc-Zz0vv_aOYn_-YGL_plEkL2rW40Bov",
      },
      {
        id: "4",
        size: "1400-932",
        title: "Mobile Appllication Booking",
        src: "https://drive.google.com/uc?id=1HKrjF19AltItkrT38AFFl6UTRH9r_nwR",
        thumb:
          "https://drive.google.com/uc?id=1HKrjF19AltItkrT38AFFl6UTRH9r_nwR",
      },
    ],
  }),
};
</script>
<style lang="css">
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lightgallery.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lg-zoom.css");
body {
  margin: 0;
}
.gallery-item {
  margin: 5px;
}
</style>