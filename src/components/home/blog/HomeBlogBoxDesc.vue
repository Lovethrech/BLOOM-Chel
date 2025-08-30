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
    background-color: rgba(95, 158, 160, 0.315);
    padding: 4vh 2vw;
    display:flex;
    place-items: end;
}
.home-blog-box-desc-main-ctn-name{
    color: #fff;
}

@media screen and (max-width: 1130px) and(min-width: 901px) {
    .home-blog-box-desc-main-ctn-name{
        font-size: 1.4vh;
    }
}
@media screen and (max-width: 900px) {
    .home-blog-box-desc-main-ctn{
        height: 100%;
        padding: 4vh 4vw;
    }
    .home-blog-desc-main-ctn-name{
        font-size: 14px;
    }
}
</style>