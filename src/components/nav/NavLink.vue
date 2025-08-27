<script setup>
import { defineProps } from 'vue';

const {name, link}=defineProps(['name', 'link']);
</script>

<template>
    <div class="nav-link-main-ctn">
        <RouterLink :to="link" class="link">
            <p class="nav-link-main-ctn-desc">
                {{name}}
            </p>
        </RouterLink>
    </div>
</template>

<style scoped>
.nav-link-main-ctn-desc{
    color: #ffffff;
}
</style>