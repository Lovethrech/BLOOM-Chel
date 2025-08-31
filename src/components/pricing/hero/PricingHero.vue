<script setup>
import NavHeader from '@/components/nav/NavHeader.vue';
import PricingHeroMainDesc from './PricingHeroMainDesc.vue';
</script>

<template>
    <section class="pricing-hero-main-ctn">
        <div class="pricing-hero-mini-ctn">
            <NavHeader></NavHeader>
            <PricingHeroMainDesc></PricingHeroMainDesc>
        </div>
    </section>
</template>

<style scoped>
.pricing-hero-main-ctn{
    width:100%;
    height:100vh;
    background: linear-gradient(to bottom, #A54dea, #594edc);
    padding: 2vh 6vw;
}  
.pricing-hero-mini-ctn{
    width:inherit;
    display:flex;
    flex-direction: column;
    gap:20px;
}

@media screen and (max-width: 850px) {
    .pricing-hero-main-ctn{
        padding:3vh 6vw;
    }
}
</style>