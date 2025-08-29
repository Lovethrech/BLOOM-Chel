<script setup>
import { defineProps } from 'vue';
import HomeBlogBoxDesc from './HomeBlogBoxDesc.vue';

const {bgImgSrc, boxDesc}=defineProps(['bgImgSrc', 'boxDesc']);
</script>

<template>
    <div class="home-blog-box-main-ctn">
        <div class="home-blog-box-mini-ctn">
            <HomeBlogBoxDesc
            :boxDesc="boxDesc"
            :style="{background:}"
            >
            </HomeBlogBoxDesc>
        </div>
    </div>
</template>

<style scoped>
.home-blog-box-main-ctn{
    background-color: green;
    background: url(@/assets/home-blog-img-two.svg) top no-repeat;
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