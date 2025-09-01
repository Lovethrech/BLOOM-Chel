<script setup>
import { defineProps } from 'vue';
import PricingPackageBoxList from './PricingPackageBoxList.vue';

const  {plans}=defineProps(['plans']);
</script>

<template>
    <div class="pricing-package-box-list-main-main-ctn">
        <div class="pricing-package-box-list-main-mini-ctn">
            <p class="pricing-package-box-list-main-mini-ctn-title">
                plan includes:
            </p>
            <br/>
            <div class="pricing-package-box-list-main-mini-ctn-list-content">
                <div class="pricing-package-box-list-main-mini-ctn-list-content-mini-ctn">
                    <PricingPackageBoxList
                        v-for="plan in plans"
                        :key="plan.id"
                        :mark="plan.mark"
                        :markName="plan.markName"
                    >
                    </PricingPackageBoxList>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pricing-package-box-list-main-main-ctn{
    margin: 5vh 0;
}
.pricing-package-box-list-main-mini-ctn-title{
    text-transform: capitalize;
    font-size: 1.8vh;
}
.pricing-package-box-list-main-mini-ctn-list-content-mini-ctn{
    display:flex;
    flex-direction: column;
    gap: 1vh;
}
</style>