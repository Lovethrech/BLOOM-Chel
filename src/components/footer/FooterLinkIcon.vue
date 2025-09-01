<script setup>
import { defineProps } from 'vue';

const {name}=defineProps(['name']);
</script>

<template>
    <div class="footer-link-icon-main-ctn" v-html="name">
    </div>
</template>

<style scoped>

</style>