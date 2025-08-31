<script setup>
import PricingHeroMainDescTitleText from './PricingHeroMainDescTitleText.vue';
import HomeHeroMainDescParagraphArrow from '@/components/home/hero/HomeHeroMainDescParagraphArrow.vue';
</script>

<template>
    <section class="home-hero-main-desc-main-ctn">
        <div class="home-hero-main-desc-mini-ctn">
            <PricingHeroMainDescTitleText></PricingHeroMainDescTitleText>
            <HomeHeroMainDescParagraphArrow></HomeHeroMainDescParagraphArrow>
        </div>
    </section>
</template>

<style scoped>
.home-hero-main-desc-main-ctn, .home-hero-main-desc-mini-ctn{
    width:100%;
    display:flex;
}
.home-hero-main-desc-main-ctn{
    height:80vh;
    place-items: end;
}
.home-hero-main-desc-mini-ctn{
    flex-direction: column;
    margin-bottom: 40px;
}
</style>