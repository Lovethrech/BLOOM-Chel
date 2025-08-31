<script setup>
import PricingPackageBoxListDetails from "@/data/pricing-package-box-list-details.json"
import PricingPackageBox from './PricingPackageBox.vue';
</script>

<template>
    <div class="pricing-package-main-box-ctn-main-ctn">
        <div class="pricing-package-main-box-ctn-mini-ctn">
            <PricingPackageBox
                v-for="PricingPackageBoxListDetail in PricingPackageBoxListDetails"
                :key="PricingPackageBoxListDetail.id"
                :name="PricingPackageBoxListDetail.name"
                :price="PricingPackageBoxListDetail.price"
                :plans="PricingPackageBoxListDetail.plans"
            >
            </PricingPackageBox>
        </div>
    </div>
</template>

<style scoped>
.pricing-package-main-box-ctn-main-ctn{
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