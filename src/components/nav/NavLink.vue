<script setup>
import { defineProps } from 'vue';

const {name, link, color, fontSize}=defineProps(['name', 'link', 'color', 'fontSize']);
</script>

<template>
    <div class="nav-link-main-ctn">
        <RouterLink :to="link" class="link">
            <p class="nav-link-main-ctn-desc" :style="{color:color, fontSize:fontSize}">
                {{name}}
            </p>
        </RouterLink>
    </div>
</template>

<style scoped>
.nav-link-main-ctn{
    margin:auto;
}
.nav-link-main-ctn-desc{
    text-transform: capitalize;
}
</style>