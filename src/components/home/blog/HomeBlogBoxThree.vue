<script setup>
import HomeBlogDetails from "@/data/home-blog-details.json";
import HomeBlogBoxImg from "./HomeBlogBoxImg.vue";
import HomeBlogBoxDesc from './HomeBlogBoxDesc.vue';
</script>

<template>
    <div class="home-blog-box-main-ctn">
        <div class="home-blog-box-mini-ctn">
            <HomeBlogBoxDesc
                :boxDesc="HomeBlogDetails[2].boxDesc"
            >
            </HomeBlogBoxDesc>
        </div>
    </div>
</template>

<style scoped>
.home-blog-box-main-ctn{
    background: url(@/assets/home-blog-img-three.svg) top no-repeat;
}
</style>