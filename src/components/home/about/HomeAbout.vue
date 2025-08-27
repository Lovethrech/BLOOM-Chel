<script setup>
import HomeAboutTitle from './HomeAboutTitle.vue';
import HomeAboutDesc from './HomeAboutDesc.vue';
import TryFreeBtn from '@/components/TryFreeBtn.vue';
import HomeAboutImg from './HomeAboutImg.vue';
</script>

<template>
    <section id="about" class="home-about-main-ctn">
        <div class="home-about-mini-ctn">
            <HomeAboutTitle></HomeAboutTitle>
            <HomeAboutDesc></HomeAboutDesc>
            <TryFreeBtn></TryFreeBtn>
            <HomeAboutImg></HomeAboutImg>
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
</style>