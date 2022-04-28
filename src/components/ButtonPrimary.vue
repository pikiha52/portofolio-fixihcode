<template>
    <button class="bg-black hover:bg-transparent hover:border-2 hover:border-black w-auto md:h-10 px-4 rounded-full hover:text-black text-white font-light ">{{ txt }}</button>
</template>


<script>
export default {
    name: 'ButtonPrimary',
    props: {
        txt: String,
    },
};
</script>