<script setup>
import { defineProps } from 'vue';

const {bgImgSrc}=defineProps(['bgImgSrc']);
</script>

<template>
    <div class="home-blog-box-img">
        <img :src="bgImgSrc" alt="">
    </div>
</template>

<style scoped>
.home-blog-box-img{
    grid-column: 1;
    grid-row: 1;
}
</style>