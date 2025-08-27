<script setup>
// import { useHomeHeroArrowSlideStore } from '@/stores/homeHeroArrowSlide';
import HomeAboutTitle from './HomeAboutTitle.vue';

// const {isOpen}=useHomeHeroArrowSlideStore();
</script>

<template>
    <section class="home-about-main-ctn">
        <div class="home-about-mini-ctn">
            <HomeAboutTitle></HomeAboutTitle>
        </div>
    </section>
</template>

<style scoped>
.home-about-main-ctn{
    margin-top: 20vh;
    padding:0 80px;
    background-color: aquamarine;
    width:100%;
    height:100vh;
}
.home-about-main-ctn .home-about-mini-ctn{
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.home-about-main-ctn.open .home-about-mini-ctn{
    max-height: 500px;
}
</style>