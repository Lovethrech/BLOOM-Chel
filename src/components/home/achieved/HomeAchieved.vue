<script setup>
import HomeAchievedDescBottom from './HomeAchievedDescBottom.vue';
import HomeAchievedDescTop from './HomeAchievedDescTop.vue';
</script>

<template>
    <section class="home-achieved-main-ctn">
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
    padding:2vh 6vw;
    background: url(@/assets/home-achieved-bg.svg);
}
</style>