<script setup>
import PricingPackageTitle from './PricingPackageTitle.vue';
import PricingPackageDesc from './PricingPackageDesc.vue';
</script>

<template>
    <section class="pricing-package-main-ctn">
        <div class="pricing-package-mini-ctn">
            <PricingPackageTitle></PricingPackageTitle>
            <PricingPackageDesc></PricingPackageDesc>
        </div>
    </section>
</template>

<style scoped>
.pricing-package-main-ctn{
    width:100%;
    height: 100vh;
    background-color: #598610;
}
</style>