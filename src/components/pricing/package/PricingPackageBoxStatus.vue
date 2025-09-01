<script setup>
import { defineProps } from 'vue';

const {name}=defineProps(['name']);
</script>

<template>
    <div class="pricing-package-box-status-main-ctn">
        <p class="pricing-package-box-status-main-ctn-name">
            {{name}}
        </p>
    </div>
</template>

<style scoped>
.pricing-package-box-status-main-ctn{
    width: 100%;
    text-align: center;
}
.pricing-package-box-status-main-ctn-name{
    text-transform: uppercase;
    font-size: 3.7vh;
    color: #1a1a1a;
    font-weight: 500;
}
</style>