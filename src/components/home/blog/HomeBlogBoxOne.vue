<script setup>
import HomeBlogDetails from "@/data/home-blog-details.json";
import HomeBlogBoxImg from "./HomeBlogBoxImg.vue";
import HomeBlogBoxDesc from './HomeBlogBoxDesc.vue';
</script>

<template>
    <div class="home-blog-box-main-ctn-1">
        <div class="home-blog-box-mini-ctn">
            <HomeBlogBoxImg class="home-blog-box-img"></HomeBlogBoxImg>
            <HomeBlogBoxDesc
                class="home-blog-box-desc"
                :boxDesc="HomeBlogDetails[0].boxDesc"
            >
            </HomeBlogBoxDesc>
        </div>
    </div>
</template>

<style scoped>
.home-blog-box-main-ctn-1{
    background-color: red;
    width:27vw;
    min-height:30vw;
    display:grid;
}
.home-blog-box-img, .home-blog-box-desc{
    grid-column: 1;
    grid-row: 1;
}
</style>