<script setup>
import { defineProps } from 'vue';

const {name}=defineProps(['name']);
</script>

<template>
    <div class="home-attribute-box-title-main-ctn">
        <p class="home-attribute-box-title-main-ctn-name">
            {{name}}
        </p>
    </div>
</template>

<style scoped>
.home-attribute-box-title-main-ctn-name{
    font-size: 1.4vw;
    text-transform: capitalize;
}
</style>