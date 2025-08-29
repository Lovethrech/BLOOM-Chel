<script setup>
import { defineProps } from 'vue';

const {boxDesc}=defineProps(['boxDesc']);
</script>

<template>
    <div class="home-blog-box-desc-main-ctn">
        <p class="home-blog-box-desc-main-ctn-name">
            Check out our latest news and articles
            about the use of technology in the medical
            field
        </p>
    </div>
</template>

<style scoped>
.home-blog-box-desc-main-ctn{
    padding: 4vh 2vw;
}
.home-blog-box-desc-main-ctn-name{
    color: #fff;
}
</style>