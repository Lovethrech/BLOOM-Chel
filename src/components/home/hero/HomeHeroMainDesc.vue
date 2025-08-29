<script setup>
import HomeHeroMainDescTitleText from './HomeHeroMainDescTitleText.vue';
import HomeHeroMainDescParagraphMainCtn from './HomeHeroMainDescParagraphMainCtn.vue';
</script>

<template>
    <section class="home-hero-main-desc-main-ctn">
        <div class="home-hero-main-desc-mini-ctn">
            <HomeHeroMainDescTitleText></HomeHeroMainDescTitleText>
            <HomeHeroMainDescParagraphMainCtn></HomeHeroMainDescParagraphMainCtn>
        </div>
    </section>
</template>

<style scoped>
.home-hero-main-desc-main-ctn, .home-hero-main-desc-mini-ctn{
    width:100%;
    display:flex;
}
.home-hero-main-desc-main-ctn{
    height:70vh;
    place-items: end;
}
.home-hero-main-desc-mini-ctn{
    flex-direction: column;
    margin-bottom: 40px;
}
</style>