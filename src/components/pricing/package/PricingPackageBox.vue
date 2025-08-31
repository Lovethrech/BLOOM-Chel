<script setup>
import PricingPackageBoxStatus from './PricingPackageBoxStatus.vue';
import PricingPackageBoxStatusDesc from './PricingPackageBoxStatusDesc.vue';
import PricingPackageBoxPrice from './PricingPackageBoxPrice.vue';
import PricingPackageBoxBuyBtn from './PricingPackageBoxBuyBtn.vue';
import PricingPackageBoxListMain from './PricingPackageBoxListMain.vue';
</script>

<template>
    <div class="pricing-package-box-main-ctn">
        <div class="pricing-package-box-mini-ctn">
            <PricingPackageBoxStatus></PricingPackageBoxStatus>
            <PricingPackageBoxStatusDesc></PricingPackageBoxStatusDesc>
            <PricingPackageBoxPrice></PricingPackageBoxPrice>
            <PricingPackageBoxBuyBtn></PricingPackageBoxBuyBtn>
            <PricingPackageBoxListMain></PricingPackageBoxListMain>
        </div>
    </div>
</template>

<style scoped>
.pricing-package-box-main-ctn{
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: 20vh;
    padding: 3vh 3vw;
}
</style>