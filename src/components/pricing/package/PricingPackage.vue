<script setup>
import PricingPackageTitle from './PricingPackageTitle.vue';
import PricingPackageDesc from './PricingPackageDesc.vue';
import PricingPackageMainBoxCtn from './PricingPackageMainBoxCtn.vue';
</script>

<template>
    <section class="pricing-package-main-ctn">
        <div class="pricing-package-mini-ctn">
            <PricingPackageTitle></PricingPackageTitle>
            <PricingPackageDesc></PricingPackageDesc>
            <PricingPackageMainBoxCtn></PricingPackageMainBoxCtn>
        </div>
    </section>
</template>

<style scoped>
.pricing-package-main-ctn{
    width:100%;
    height: 100vh;
    padding: 10vh 4vw;
    background-color: #ffffff;
}

@media screen and (max-width:850px) {
    .pricing-package-main-ctn{
        height: 100%;
    }
}
</style>