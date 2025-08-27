<script setup>
import { useHomeHeroArrowSlideStore } from '@/stores/homeHeroArrowSlide';

const {toggleContent}=useHomeHeroArrowSlideStore();
</script>

<template>
    <div class="home-hero-main-desc-paragraph-arrow-main-ctn" @click="toggleContent">
        <i class="fi fi-tr-arrow-down"></i>
    </div>
</template>

<style scoped>
.home-hero-main-desc-paragraph-arrow-main-ctn{
    font-size: 70px;
    color:#fff;
}
.home-hero-main-desc-paragraph-arrow-main-ctn:hover{
    will-change: transform;
    scro
    position:absolute;
    right:80px;
    height:90vh;
    transition: all 400ms ease;
}
</style>