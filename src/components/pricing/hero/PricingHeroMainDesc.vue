<script setup>
import PricingHeroMainDescTitleText from './PricingHeroMainDescTitleText.vue';
import PricingHeroMainDescArrow from '@/components/pricing/hero/PricingHeroMainDescArrow.vue';
</script>

<template>
    <section class="pricing-hero-main-desc-main-ctn">
        <div class="pricing-hero-main-desc-mini-ctn">
            <PricingHeroMainDescTitleText></PricingHeroMainDescTitleText>
            <PricingHeroMainDescArrow></PricingHeroMainDescArrow>
        </div>
    </section>
</template>

<style scoped>
.pricing-hero-main-desc-mini-ctn{
    flex-direction: row;
    justify-content: space-between;
}
</style>