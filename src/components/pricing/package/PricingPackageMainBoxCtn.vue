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
    margin-top: 8vh;
    width: 100%;
    height: 100%;
}
.pricing-package-main-box-ctn-mini-ctn{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2vw;
}

@media screen and (max-width: 950px) {
    .pricing-package-main-box-ctn-main-ctn{
        height: 100%;
    }
    .pricing-package-main-box-ctn-mini-ctn{
        flex-direction: column;
        gap:4vh;
    }
}
</style>