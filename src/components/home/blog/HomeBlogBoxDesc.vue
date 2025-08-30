<script setup>
import { defineProps } from 'vue';

const {boxDesc}=defineProps(['boxDesc']);
</script>

<template>
    <div class="home-blog-box-desc-main-ctn">
        <p class="home-blog-box-desc-main-ctn-name">
            {{boxDesc}}
        </p>
    </div>
</template>

<style scoped>
.home-blog-box-desc-main-ctn{
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    height: 30vw;
    background-color: cadetblue;
    padding: 4vh 2vw;
}
.home-blog-box-desc-main-ctn-name{
    color: #fff;
}
</style>