<script setup>
import PricingPackageBox from './PricingPackageBox.vue';
</script>

<template>
    <div class="pricing-package-main-box-ctn-main-ctn">
        <div class="pricing-package-main-box-ctn-mini-ctn">
            <PricingPackageBox></PricingPackageBox>
            <PricingPackageBox></PricingPackageBox>
            <PricingPackageBox></PricingPackageBox>
        </div>
    </div>
</template>

<style scoped>
.pricing-package-main-box-ctn-main-ctn{
    background-color: coral;
    margin-top: 4vh;
    width: 100%;
    height: 50vh;
}
.pricing-package-main-box-ctn-mini-ctn{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2vw;
}
</style>