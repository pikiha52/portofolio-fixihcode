<template>
  <nav class="flex justify-between px-10 py-5 bg-yellow-500">
    <div class="flex justify-start">
      <router-link class="text-gray-700 font-extrabold" to="/">FA</router-link>
    </div>
    <div class="flex gap-5 justify-end">
      <router-link class="text-gray-700 hover:text-white" to="/about">
        <ion-icon name="albums" size="large"></ion-icon>
      </router-link>
      <router-link to="/about" class="text-gray-700 hover:text-white">
        <ion-icon name="mail" size="large"></ion-icon>
      </router-link>
    </div>
  </nav>
  <router-view />
</template>



