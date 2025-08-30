<script setup>
import HomeBlogDetails from "@/data/home-blog-details.json";
import HomeBlogBoxImg from "./HomeBlogBoxImg.vue";
import HomeBlogBoxDesc from './HomeBlogBoxDesc.vue';
</script>

<template>
    <div class="home-blog-box-main-ctn-1">
        <div class="home-blog-box-mini-ctn">
            <HomeBlogBoxImg></HomeBlogBoxImg>
            <HomeBlogBoxDesc
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
</style>