<script setup>
import PricingHeroMainDescTitleText from './PricingHeroMainDescTitleText.vue';
import HomeHeroMainDescParagraphArrow from '@/components/home/hero/HomeHeroMainDescParagraphArrow.vue';
</script>

<template>
    <section class="pricing-hero-main-desc-main-ctn">
        <div class="pricing-hero-main-desc-mini-ctn">
            <PricingHeroMainDescTitleText></PricingHeroMainDescTitleText>
            <HomeHeroMainDescParagraphArrow></HomeHeroMainDescParagraphArrow>
        </div>
    </section>
</template>

<style scoped>
.pricing-hero-main-desc-mini-ctn{
    flex-direction: row;
    justify-content: space-between;
}
</style>