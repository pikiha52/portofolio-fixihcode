<template>
  <div class="bg-yellow-500 rounded shadow-lg md:py-20 md:px-40">
    <div class="bg-white shadow-lg rounded py-2 px-2 md:py-32 md:px-20">
      <div class="hidden md:grid md:grid-cols-2 md:gap-0 w-full">
        <!-- {{-- desktop --}} -->
        <div class="md:bg-white md:shadow-lg md:rounded-xl md:w-60 md:h-60">
          <img
            src="../assets/my-profile.png"
            class="w-60 h-60 py-6 px-6"
            alt=""
          />
        </div>

        <div
          class="
            md:bg-white md:shadow-lg md:rounded-xl md:w-full md:px-8 md:py-4
          "
        >
          <p class="font-extrabold font-poppins text-gray-700 text-xl">
            Fikih Alan
          </p>
          <p class="font-extrabold font-poppins text-yellow-500 text-sm mb-2">
            Full Stack Developer
          </p>
          <p class="font-semibold font-poppins text-gray-600 text-sm">
            Hello, my name Fikih Alan people used to call me Pikih or Kih, I'am
            a Full Stack Developer, i can use Framework Laravel, Codeigniter,
            Flutter, Tailwindcss. I really like the new thing about programming.
            For more information, visit
            <a href="https://github.com/pikiha52" class="text-yellow-500"
              >pikiha52.github.io</a
            >
          </p>
        </div>
        <!-- {{-- end --}} -->
      </div>

      <div class="md:hidden w-full absolute top-10 left-32 right-36">
        <!-- {{-- mobile --}} -->
        <div
          class="
            md:hidden
            bg-white
            shadow-sm
            mb-4
            shadow-cyan-500
            rounded-full
            w-36
            border-2 border-cyan-500
            h-36
            flex
            justify-center
          "
        >
          <img
            src="../assets/my-profile.png"
            class="w-32 h-32 py-4 px-4"
            alt=""
          />
        </div>
        <!-- {{-- end --}} -->
      </div>

      <div class="md:hidden pt-14">
        <!-- {{-- mobile --}} -->
        <div
          class="
            md:hidden
            bg-white
            opacity-80
            shadow-lg
            rounded-md
            w-auto
            px-2
            py-2
          "
        >
          <p class="font-extrabold font-poppins text-gray-700">Fikih Alan</p>
          <p class="font-extrabold font-poppins text-cyan-500 text-xs mb-2">
            Full Stack Developer
          </p>
          <p class="font-semibold font-poppins text-gray-600 text-xs">
            Hello, my name Fikih Alan people used to call me Pikih or Kih, I'am
            a Full Stack Developer, i can use Framework Laravel, Codeigniter,
            Flutter, Tailwindcss. I really like the new thing about programming.
            For more information, visit
            <a href="https://github.com/pikiha52" class="text-yellow-500"
              >pikiha52.github.io</a
            >
          </p>
        </div>
        <!-- {{-- end --}} -->
      </div>

      <div
        class="
          grid grid-rows-none
          gap-4
          py-4
          md:grid md:grid-cols-2 md:gap-10 md:py-8
        "
      >
        <div class="bg-white shadow-lg rounded-xl w-full px-8 py-4">
          <p class="font-bold font-poppins text-sm text-yellow-500 mb-4">
            Project Experince
          </p>
          <ul class="list-disc">
            <li>
              <p class="font-poppins font-normal text-gray-600 text-xs">
                Website Recruitment
              </p>
            </li>
            <li>
              <p class="font-poppins font-normal text-gray-600 text-xs">
                Website Daily Activity
              </p>
            </li>
            <li>
              <p class="font-poppins font-normal text-gray-600 text-xs">
                Website Anti Fake Products
              </p>
            </li>
            <li>
              <p class="font-poppins font-normal text-gray-600 text-xs">
                API Parking
              </p>
            </li>
            <li>
              <p class="font-poppins font-normal text-gray-600 text-xs">
                Mobile Apps Parking
              </p>
            </li>
            <li>
              <p class="font-poppins font-normal text-gray-600 text-xs">
                Website Admin Parking
              </p>
            </li>
            <li>
              <p class="font-poppins font-normal text-gray-600 text-xs">
                Website Manajement Coffe Shop
              </p>
            </li>
            <li>
              <p class="font-poppins font-normal text-gray-600 text-xs">
                Website E-commerce
              </p>
            </li>
          </ul>
        </div>

        <div class="bg-white shadow-lg rounded-xl w-full px-8 py-4">
          <p class="font-poppins text-sm font-bold text-yellow-500 mb-4">
            Job Experience
          </p>
          <ul class="list-disc">
            <li>
              <p class="text-xs font-normal font-poppins text-gray-600">
                Laravel Developer at PT Nose Herbalindo
              </p>
              <p class="text-xs font-normal font-poppins text-gray-400">
                Desc, 2021 - Today
              </p>
            </li>
            <li>
              <p class="text-xs font-normal font-poppins text-gray-600">
                Backend Developer at PT RUN 8
              </p>
              <p class="text-xs font-normal font-poppins text-gray-400">
                Aug, 2021 - Desc, 2021
              </p>
            </li>
            <li>
              <p class="text-xs font-normal font-poppins text-gray-600">
                Business Development at PT Dakota Cargo
              </p>
              <p class="text-xs font-normal font-poppins text-gray-400">
                Sept, 2020 - Desc, 2020
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div class="md:grid md:grid-cols-2 md:gap-10 mb-4">
        <div class="bg-white rounded-xl shadow-lg mb-4 px-8 py-4">
          <p class="font-poppins text-yellow-500 font-bold text-sm mb-4">
            Programming Skils
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div class="">
              <div class="flex space-x-2 mb-2">
                <div
                  class="bg-red-500 rounded-md w-4 text-transparent py-2"
                ></div>
                <p class="text-xs font-poppins font-normal text-gray-600">
                  Laravel
                </p>
              </div>
              <div class="flex space-x-2 mb-2">
                <div
                  class="bg-orange-400 rounded-md w-4 text-transparent py-2"
                ></div>
                <p class="text-xs font-poppins font-normal text-gray-600">
                  Codeigniter
                </p>
              </div>
              <div class="flex space-x-2 mb-2">
                <div
                  class="bg-yellow-500 rounded-md w-4 text-transparent py-2"
                ></div>
                <p class="text-xs font-poppins font-normal text-gray-600">
                  Html
                </p>
              </div>
              <div class="flex space-x-2 mb-2">
                <div
                  class="bg-green-300 rounded-md w-4 text-transparent py-2"
                ></div>
                <p class="text-xs font-poppins font-normal text-gray-600">
                  Tailwind CSS
                </p>
              </div>
            </div>
            <div class="">
              <div class="flex space-x-2 mb-2">
                <div
                  class="bg-purple-400 rounded-md w-4 text-transparent py-2"
                ></div>
                <p class="text-xs font-poppins font-normal text-gray-600">
                  PHP
                </p>
              </div>
              <div class="flex space-x-2 mb-2">
                <div
                  class="bg-yellow-500 rounded-md w-4 text-transparent py-2"
                ></div>
                <p class="text-xs font-poppins font-normal text-gray-600">
                  MySql
                </p>
              </div>
              <div class="flex space-x-2 mb-2">
                <div
                  class="bg-blue-400 rounded-md w-4 text-transparent py-2"
                ></div>
                <p class="text-xs font-poppins font-normal text-gray-600">
                  Bootstrap
                </p>
              </div>
              <div class="flex space-x-2 mb-2">
                <div
                  class="bg-yellow-200 rounded-md w-4 text-transparent py-2"
                ></div>
                <p class="text-xs font-poppins font-normal text-gray-600">
                  Javascript
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg px-8 py-4">
          <p class="text-sm font-bold font-poppins text-yellow-500 mb-4">
            Favorites
          </p>
          <div class="flex justify-between px-4 mb-4">
            <div class="items-start">
              <div
                class="
                  bg-white
                  rounded-md
                  px-5
                  py-5
                  shadow-lg
                  flex flex-col
                  space-y-2
                  items-center
                  text-yellow-500
                "
              >
                <ion-icon name="trail-sign"></ion-icon>
                <p class="text-gray-600 font-poppins text-xs">Hiking</p>
              </div>
            </div>

            <div class="items-end">
              <div
                class="
                  bg-white
                  rounded-md
                  px-5
                  py-5
                  shadow-lg
                  flex flex-col
                  space-y-2
                  items-center
                  text-yellow-500
                "
              >
                <ion-icon name="bicycle"></ion-icon>
                <p class="text-gray-600 font-poppins text-xs">Biking</p>
              </div>
            </div>
          </div>

          <div class="flex justify-between px-4 mb-2">
            <div class="items-start">
              <div
                class="
                  bg-white
                  rounded-md
                  px-5
                  py-5
                  shadow-lg
                  flex flex-col
                  space-y-2
                  items-center
                  text-yellow-500
                "
              >
                <ion-icon name="bus"></ion-icon>
                <p class="text-gray-600 font-poppins text-xs">Travell</p>
              </div>
            </div>

            <div class="items-end">
              <div
                class="
                  bg-white
                  rounded-md
                  px-5
                  py-5
                  shadow-lg
                  flex flex-col
                  space-y-2
                  items-center
                  text-yellow-500
                "
              >
                <ion-icon name="bus"></ion-icon>
                <p class="text-gray-600 font-poppins text-xs">Movie</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          bg-white
          rounded-xl
          shadow-lg
          md:px-8 md:py-4
          px-2
          py-2
          w-full
          md:w-full
        "
      >
        <div class="md:flex md:space-x-4 grid md:items-center">
          <a
            href="mailto:pikiha52@gmail.com?subject = Feedback&body = Message"
            class="
              hover:bg-gray-100
              hover:text-cyan-500
              hover:px-2
              hover:py-2
              hover:rounded-md
            "
          >
            <div class="flex space-x-2 pl-2 text-yellow-500 text-2xl">
              <ion-icon name="mail"></ion-icon>
              <p
                class="
                  pl-2
                  pt-1
                  text-gray-600
                  hover:text-cyan-500
                  font-poppins font-bold
                  text-sm
                "
              >
                pikiha52@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com/pikiha52"
            class="
              hover:bg-gray-100
              hover:text-cyan-500
              hover:px-2
              hover:py-2
              hover:rounded-md
            "
          >
            <div class="flex space-x-2 pl-2 text-yellow-500 text-2xl">
              <ion-icon name="logo-github"></ion-icon>
              <p
                class="
                  pl-2
                  pt-1
                  text-gray-600
                  hover:text-cyan-500
                  font-poppins font-bold
                  text-sm
                "
              >
                pikiha52
              </p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/pikihaja/"
            class="
              hover:bg-gray-100
              hover:text-cyan-500
              hover:px-2
              hover:py-2
              hover:rounded-md
            "
          >
            <div class="flex space-x-2 pl-2 text-yellow-500 text-2xl">
              <ion-icon name="logo-instagram"></ion-icon>
              <p
                class="
                  pl-2
                  pt-1
                  text-gray-600
                  hover:text-cyan-500
                  font-poppins font-bold
                  text-sm
                "
              >
                pikihaja
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/pikiha52"
            class="
              hover:bg-gray-100
              hover:text-cyan-500
              hover:px-2
              hover:py-2
              hover:rounded-md
            "
          >
            <div class="flex space-x-2 pl-2 text-yellow-500 text-2xl">
              <ion-icon name="logo-linkedin"></ion-icon>
              <p
                class="
                  pl-2
                  pt-1
                  text-gray-600
                  hover:text-cyan-500
                  font-poppins font-bold
                  text-sm
                "
              >
                pikihaja
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "My Curriculum vitae",
  created() {
    document.title = "My Curriculum vitae";
  },
};
</script>
