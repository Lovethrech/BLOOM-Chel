<script setup>
import { defineProps } from 'vue';

const {imgSrc, imgName}=defineProps(['imgSrc', 'imgName']);
</script>

<template>
    <div class="home-partner-logo-box-main-ctn">
        <img :src="imgSrc" :alt="imgName">
    </div>
</template>

<style scoped>
.home-partner-logo-box-main-ctn{
    width:15vw;
    height: 20vw;
}

@media screen and (max-width: 850px) {
    .home-partner-logo-box-main-ctn{
        width: 41.3vw;
    }
}
</style>