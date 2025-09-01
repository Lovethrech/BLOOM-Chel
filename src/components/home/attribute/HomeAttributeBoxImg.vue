<script setup>
import { defineProps } from 'vue';

const {imgSrc}=defineProps(['imgSrc']);
</script>

<template>
    <div class="home-attribute-box-img-main-ctn" v-html="imgSrc"></div>
</template>

<style scoped>
.home-attribute-box-img-main-ctn{
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    place-items: center;
}
.home-attribute-box-img-main-ctn{
    font-size: 12vh;
    color:#A54dea;
}
</style>