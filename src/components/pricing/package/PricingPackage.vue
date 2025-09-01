<script setup>
import PricingPackageTitle from './PricingPackageTitle.vue';
import PricingPackageDesc from './PricingPackageDesc.vue';
import PricingPackageMainBoxCtn from './PricingPackageMainBoxCtn.vue';
</script>

<template>
    <section id="package" class="pricing-package-main-ctn">
        <div class="pricing-package-mini-ctn">
            <PricingPackageTitle></PricingPackageTitle>
            <br/>
            <PricingPackageDesc></PricingPackageDesc>
            <PricingPackageMainBoxCtn></PricingPackageMainBoxCtn>
        </div>
    </section>
</template>

<style scoped>
.pricing-package-main-ctn{
    width:100%;
    min-height: 100vh;
    padding: 10vh 6vw;
    background-color: #ffffff;
}

@media screen and (max-width:850px) {
    .pricing-package-main-ctn{
        height: 100%;
    }
}
</style>