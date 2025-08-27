<script setup>
import HomeHeroMainDescTitleText from './HomeHeroMainDescTitleText.vue';
import HomeHeroMainDescParagraphMainCtn from './HomeHeroMainDescParagraphMainCtn.vue';
</script>

<template>
    <section class="home-hero-main-desc-main-ctn">
        <HomeHeroMainDescTitleText></HomeHeroMainDescTitleText>
        <HomeHeroMainDescParagraphMainCtn></HomeHeroMainDescParagraphMainCtn>
        <!-- <i class="fi fi-tr-arrow-down"></i> -->
    </section>
</template>

<style scoped>
.home-hero-main-desc-main-ctn{
    background-color: aquamarine;
    width:100%;
    height:60vh;
}
</style>