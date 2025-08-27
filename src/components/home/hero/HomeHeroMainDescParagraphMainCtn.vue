<script setup>
import HomeHeroMainDescParagraph from './HomeHeroMainDescParagraph.vue';
import HomeHeroMainDescParagraphArrow from './HomeHeroMainDescParagraphArrow.vue';
import TryFreeBtn from "@/components/TryFreeBtn.vue";
</script>

<template>
    <div class="home-hero-main-desc-paragraph-main-ctn-main-ctn">
        <HomeHeroMainDescParagraph></HomeHeroMainDescParagraph>
        <HomeHeroMainDescParagraphArrow class="home-hero-main-desc-paragraph-main-ctn-main-ctn-paragraph-arrow"></HomeHeroMainDescParagraphArrow>
        <TryFreeBtn class="home-hero-main-desc-paragraph-main-ctn-main-ctn-try-free"></TryFreeBtn>
    </div>
</template>

<style scoped>
.home-hero-main-desc-paragraph-main-ctn-main-ctn{
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.home-hero-main-desc-paragraph-main-ctn-main-ctn-try-free{
    display:none;
}

@media screen and (max-width: 850px) {
    .home-hero-main-desc-paragraph-main-ctn-main-ctn{
        flex-direction: column;
        gap:20px;
    }
    .home-hero-main-desc-paragraph-main-ctn-main-ctn-paragraph-arrow{
        display: none;
    }
    .home-hero-main-desc-paragraph-main-ctn-main-ctn-try-free{
        display:block;
    }
}
</style>