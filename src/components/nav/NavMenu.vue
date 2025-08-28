<script setup>
import { defineProps } from 'vue';

const {navMenuActiveIcon}=defineProps(['navMenuActiveIcon']);
</script>

<template>
    <div class="nav-menu-img-ctn" v-html="navMenuActiveIcon"></div>
</template>

<style scoped>
.nav-menu-img-ctn{
    margin:auto 0;
}
.nav-menu-img-ctn{
    font-size: 2vh;
    color: #594edc;
}
</style>