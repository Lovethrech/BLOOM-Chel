<script setup>
import { defineProps } from 'vue';


const {mark, markName}=defineProps(['mark', 'markName']);
console.log(mark);
</script>


<template>
    <div class="pricing-package-box-list-main-ctn">
        <div class="pricing-package-box-list-mini-ctn">
            <div class="pricing-package-box-list-mini-ctn-mark-ctn">
                {{ mark }}
            </div>
            <div class="pricing-package-box-list-mini-ctn-mark-name-ctn">
                <p class="pricing-package-box-list-mini-ctn-mark-name">
                    {{markName}}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pricing-package-box-list-mini-ctn{
    display:flex;
    flex-direction: row;
    gap: 0.5vh;
}
</style>