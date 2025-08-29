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
    padding: 10vh 6vw;
    background: url(@/assets/home-achieved-bg.svg) center/ auto no-repeat;
    background-size: cover;
}
.home-achieved-mini-ctn{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}

@media screen and (max-width:850px) {
    .home-achieved-main-ctn{
        background: url(@/assets/home-achieved-bg-mobile.svg) center/ auto no-repeat;
        background-size: cover;
    }
}
</style>