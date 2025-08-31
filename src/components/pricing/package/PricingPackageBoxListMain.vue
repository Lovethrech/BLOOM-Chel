<script setup>
import PricingPackageBoxList from './PricingPackageBoxList.vue';
</script>

<template>
    <div class="pricing-package-box-list-main-main-ctn">
        <div class="pricing-package-box-list-main-mini-ctn">
            <p class="pricing-package-box-list-main-mini-ctn-title">
                plan includes:
            </p>
            <div class="pricing-package-box-list-main-mini-ctn-list-content">
                <div class="pricing-package-box-list-main-mini-ctn-list-content-mini-ctn">
                    <PricingPackageBoxList></PricingPackageBoxList>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pricing-package-box-list-main-main-ctn{
    margin: 2vh 0;
}
.pricing-package-box-list-main-mini-ctn-title{
    text-transform: capitalize;
    font-size: 1.8vh;
}
</style>