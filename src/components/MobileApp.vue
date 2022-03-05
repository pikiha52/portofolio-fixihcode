<template>
    <div v-for="portofolio in state.portofolio.data" :key="portofolio.id" class="">
        <div v-for="detail in portofolio.details" :key="detail.id">
            <a
        href="#"
        class="rounded-xl w-64 h-auto grid justify-center bg-gray-50 hover:text-gray-800 text-transparent text-sm font-bold"
      >
        <img
          :src="`http://192.168.43.245:8070/assets/project/`+ detail.image"
          alt=""
          class="w-64 rounded-md hover:opacity-20"
        />
        <p class="text-center">{{ portofolio.name }}</p>
      </a>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../plugins/axios";

export default {
  setup() {
    const state = reactive({
      portofolio: {},
    });

    onMounted(async () => {
      const { data } = await axios.get(
        `http://192.168.43.245:8070/api/portofolio/mobile`
      );
      state.portofolio = data;
    });

    return {
      state,
    };
  },
};
</script>