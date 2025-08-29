<script setup>
import HomeAchievedDescBottom from './HomeAchievedDescBottom.vue';
import HomeAchievedDescTop from './HomeAchievedDescTop.vue';
import HomeAchievedImgBg from './HomeAchievedImgBg.vue';
</script>

<template>
    <section class="home-achieved-main-ctn">
        <HomeAchievedImgBg></HomeAchievedImgBg>
        <div class="home-achieved-mini-ctn">
            <HomeAchievedDescTop></HomeAchievedDescTop>
            <HomeAchievedDescBottom></HomeAchievedDescBottom>
        </div>
    </section>
</template>

<style scoped>
.home-achieved-main-ctn{
    width:100%;
    height:100vh;
}
</style>