<template>
    <button class="hover:bg-black bg-transparent hover:border-0 border-2 hover:text-white border-black w-auto h-10 px-4 rounded-full text-black font-light ">{{ txt }}</button>
</template>

<script>
export default {
    name: 'ButtonOutline',
    props: {
        txt: String
    }
};
</script>