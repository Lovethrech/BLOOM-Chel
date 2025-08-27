<script setup>
import { defineProps } from 'vue';

const {name, link, color}=defineProps(['name', 'link', 'color']);
</script>

<template>
    <div class="nav-link-main-ctn">
        <RouterLink :to="link" class="link">
            <p class="nav-link-main-ctn-desc" :style="{color:color}">
                {{name}}
            </p>
        </RouterLink>
    </div>
</template>

<style scoped>
.nav-link-main-ctn-desc{
    font-size: 16px;;
    text-transform: capitalize;
}
</style>