<script setup>
import HomeHeroMainDescParagraph from './HomeHeroMainDescParagraph.vue';
import HomeHeroMainDescParagraphArrow from './HomeHeroMainDescParagraphArrow.vue';
</script>

<template>
    <div class="home-hero-main-desc-paragraph-main-ctn-main-ctn">
        <HomeHeroMainDescParagraph></HomeHeroMainDescParagraph>
        <HomeHeroMainDescParagraphArrow></HomeHeroMainDescParagraphArrow>
    </div>
</template>

<style scoped>
.home-hero-main-desc-paragraph-main-ctn-main-ctn{
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>