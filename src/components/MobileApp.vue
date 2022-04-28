<template>
  <a
    @click="parking()"
    class="rounded-xl w-64 h-auto grid justify-center bg-gray-50 hover:text-gray-800 text-transparent text-sm font-bold"
  >
    <img
      src="../assets/parking/2.png"
      alt=""
      class="w-64 rounded-md hover:opacity-20"
    />
    <p class="text-center">Booking Parking</p>
  </a>
</template>

<script>
export default {
  methods: {
    parking() {
      this.$router.push('/parako');
    },
  },
};
</script>
