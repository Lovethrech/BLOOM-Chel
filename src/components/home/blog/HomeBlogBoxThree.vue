<script setup>
import HomeBlogDetails from "@/data/home-blog-details.json";
import HomeBlogBoxThreeImg from "./HomeBlogBoxThreeImg.vue";
import HomeBlogBoxDesc from './HomeBlogBoxDesc.vue';
</script>

<template>
    <div class="home-blog-box-main-ctn">
        <div class="home-blog-box-mini-ctn">
            <HomeBlogBoxThreeImg
                :bgImgSrc="HomeBlogDetails[2].bgImgSrc"
            >
            </HomeBlogBoxThreeImg>
            <HomeBlogBoxDesc
                :boxDesc="HomeBlogDetails[2].boxDesc"
            >
            </HomeBlogBoxDesc>
        </div>
    </div>
</template>