<script setup>
import { defineProps } from 'vue';
import HomeBlogBoxDesc from './HomeBlogBoxDesc.vue';

const {bgImgSrc, boxDesc}=defineProps(['bgImgSrc', 'boxDesc']);
console.log(bgImgSrc);
</script>

<template>
    <div class="home-blog-box-main-ctn" :style="{background:bgImgSrc}">
        <div class="home-blog-box-mini-ctn">
            <HomeBlogBoxDesc
                :boxDesc="boxDesc"
            >
            </HomeBlogBoxDesc>
        </div>
    </div>
</template>

<style scoped>
.home-blog-box-main-ctn{
    background-color: green;
    background-size: cover;
    width:27vw;
    min-height:30vw;
    display:flex;
    place-items: end;
}

@media screen and (max-width:900px) {
    .home-blog-box-main-ctn{
        width:100%;
        min-height: 500px;
    }
}
</style>