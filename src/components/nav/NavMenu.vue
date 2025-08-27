<script setup>
import { defineProps } from 'vue';

const {navMenuActiveIcon}=defineProps(['navMenuActiveIcon']);
</script>

<template>
    <div class="nav-menu-img-ctn" v-html="navMenuActiveIcon">
    </div>
    <!-- <i class="fi fi-tc-menu-burger"></i> -->
        <!-- <i class="fi fi-br-cross-small"></i> -->
</template>

<style scoped>
.nav-menu-img-ctn i{
    font-size: 26px;
}
</style>