<script setup>
import { useHomeHeroArrowSlideStore } from '@/stores/homeHeroArrowSlide';

const {toggleContent}=useHomeHeroArrowSlideStore();
console.log(toggleContent);
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
    transform: scaleY(1.3);
    transition: all .8s;
}
</style>