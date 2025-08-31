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
    box-shadow: 0.2vw 0.2vh 20px 20px #cdcbcd2c;
    width: 100%;
    height: 40vh;
    padding: 3vh 3vw;
}
</style>