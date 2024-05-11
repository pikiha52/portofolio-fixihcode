<template>
  <div class="sm:mb-28 mt-14">
    <section class="flex justify-center py-2 gap-2">
      <div class="sm:flex sm:relative">
        <div
          class="rounded-l-full sm:absolute sm:-left-24 sm:-top-16 rounded-tr-full bg-blue-200 w-20 px-2 pt-4 mb-2"
        >
          <img src="../assets/my-profile.png" alt="" />
        </div>
        <div class="bg-white rounded-full px-4 py-2 font-light font-sans">
          Hi i'm Fikih Alan
        </div>
      </div>
    </section>

    <section class="grid justify-center mb-10">
      <div class="max-w-2xl text-center grid gap-5">
        <p class="sm:text-6xl font-extrabold font-sans">Backend Developer</p>
        <p class="sm:text-6xl font-normal">
          Based on <span class="font-extrabold">Indonesia</span>
        </p>
        <div class="">
          <p class="text-sm">
            Associate Degree Information Systems graduate, with experience as a
            Backend Developer, mastering the programming languages ​​Php,
            Javascript, Dart, and Mastering Laravel Framework, Codeigniter,
            Flutter, Tailwind CSS, Vue Js, Xpress Js, Docker.
          </p>
        </div>
      </div>
    </section>
  </div>

  <ToolsComponent />

  <section class="bg-black w-screen">
    <div class="px-10 py-10 grid gap-8">
      <p class="text-white font-bold sm:text-4xl">About Me</p>
      <p class="text-white text-lg max-w-4xl">
        Associate Degree Information Systems graduate, with experience as a
        Backend Developer, mastering the programming languages ​​Php,
        Javascript, Dart, and Mastering Laravel Framework, Codeigniter, Flutter,
        Tailwind CSS, Vue Js, Xpress Js, Docker.
      </p>
      <!-- job -->
      <p class="text-white font-bold sm:text-4xl pt-10">Experience Job</p>
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="item in experiencesJob" class="flex gap-5">
          <p class="text-blue-500 font-bold">{{ item.years }}</p>
          <div class="grid">
            <p class="text-white">{{ item.title }}</p>
            <p class="text-gray-300 opacity-70">{{ item.company }}</p>
            <p class="text-gray-300 opacity-70">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- project -->
      <p class="text-white font-bold sm:text-4xl pt-10">Experience Projects</p>
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="item in experienceProject" class="flex gap-5">
          <p class="text-blue-500 font-bold">2022</p>
          <div class="grid">
            <p class="text-white">{{ item.tech }}</p>
            <p class="text-gray-300 opacity-70">{{ item.name }}</p>
            <p class="text-gray-300 opacity-70">
              {{ item.description }}
              <a
                v-if="item.link != '(not publish)'"
                target="_blank" class="text-blue-500 font-bold hover:text-blue-100"
                :href="item.link"
                >Click me for look.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ToolsComponent from "@/components/ToolsComponent.vue";
export default {
  name: "Home",
  components: { ToolsComponent },
  data() {
    return {
      experiencesJob: [
        {
          title: "Senior Fullstack Developer",
          company: "Allo Bank, South Jakarta",
          description:
            "Creating and implementing additional features for an already improved product.",
          years: 2024,
        },
        {
          title: "Backend Developer",
          company: "Dipay, South Jakarta",
          description:
            "Creating and implementing additional features for an already improved product.",
          years: 2023,
        },
        {
          title: "Backend Developer",
          company: "Wetalk, South Jakarta",
          description:
            "Build new chat bot or update existing bot for platform whatsapp, telegram, instagram, facebook messager, line.",
          years: 2022,
        },
        {
          title: "Laravel Developer",
          company: "PT Nose Herbal Indo, North Jakarta",
          description:
            "Build new web application or update module on existing web application on erp company, for example, i build web application for booking meeting rooms and operational vehicle, and i build anti-fake system for checking original product or fake.",
          years: 2021,
        },
        {
          title: "Backend Developer",
          company: "PT Run 8, Depok - West Java",
          description:
            "Build api for mobile apps and web application admin form mobile apps parking, for example, i build api for register account, search location parking, and check parking fees using barcode on ticket.",
          years: 2021,
        },
      ],
      experienceProject: [
        {
          tech: "VueJs + ExpressJS",
          name: "Znaptix Chatbot Event",
          description:
            "Build a chatbot and backoffice for buy ticket events, on whatsapp",
          link: "https://znaptix.com",
          years: 2023,
        },
        {
          tech: "Laravel",
          name: "Booking - PT Nose Herbalindo",
          description:
            "Build a web applications for Booking meeting rooms and bookings vehicle operational for PT Nose Herbalindo.",
          link: "https://booking.nose.co.id",
          years: 2022,
        },
        {
          tech: "Laravel",
          name: "Recruitment - PT Nose Herbalindo",
          description:
            "Build a web applications for Recruitment for PT Nose Herbalindo",
          link: "https://recruitment.nose.co.id/office",
          years: 2022,
        },
        {
          tech: "Laravel",
          name: "Point of sale - Cashier",
          description:
            "Build a web applications cashier for PT Nose Herbalindo for events outside the office.",
          link: "(not publish)",
          years: 2022,
        },
        {
          tech: "Flutter",
          name: "Point of sale - Cashier",
          description:
            "Build a mobile cashier application for PT Nose Herbalindo for events outside the office.",
          link: "(not publish)",
          years: 2022,
        },
        {
          tech: "Laravel",
          name: "Codebooks",
          description:
            "Build web applications for buy books or buy course programming",
          link: "https://codebook.id",
          years: 2022,
        },
        {
          tech: "Flutter",
          name: "Booking Parking",
          description: "Build mobile application for booking parking",
          link: "(not publish)",
          years: 2021,
        },
        {
          tech: "Codeigniter",
          name: "Manajement Coffeshop",
          description:
            "Build web application for manajement coffeshop, there are several features absensi, point of sale, payroll",
          link: "(not publish)",
          years: 2021,
        },
      ],
    };
  },
};
</script>
