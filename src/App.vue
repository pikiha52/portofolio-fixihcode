<template>
  <nav class="flex justify-between px-10 py-5 bg-yellow-500">
    <div class="flex justify-start">
      <router-link class="text-gray-700 font-extrabold" to="/">FA</router-link>
    </div>
    <div class="flex justify-center gap-5">
      <router-link class="text-gray-700 hover:text-white" to="/">
        <p>Me</p>
      </router-link>
      <router-link class="text-gray-700 hover:text-white" to="/portofolio">
        <p>Portofolio</p>
      </router-link>
      <router-link class="text-gray-700 hover:text-white" to="/about">
        <p>About</p>
      </router-link>
    </div>
    <div class="flex gap-5 justify-end">
      <router-link class="text-gray-700 hover:text-white" to="/about">
        <ion-icon name="albums" size="large"></ion-icon>
      </router-link>
      <a href="http://linkedin.com/in/pikiha52/" target="__blank">
        <ion-icon
          name="mail"
          class="text-gray-700 hover:text-white"
          size="large"
        ></ion-icon>
      </a>
    </div>
  </nav>
  <router-view />
</template>


<script>
export default {
  head: {
    link: [
      {
        rel: "icon",
        href: require("./assets/home.png"),
      },
    ],
  },
};
</script>


