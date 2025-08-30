<script setup>
import HomeBlogDetails from "@/data/home-blog-details.json";
import HomeBlogBoxImg from "./HomeBlogBoxImg.vue";
import HomeBlogBoxDesc from './HomeBlogBoxDesc.vue';
</script>

<template>
    <div class="home-blog-box-main-ctn">
        <div class="home-blog-box-mini-ctn">
            <HomeBlogBoxImg></HomeBlogBoxImg>
            <HomeBlogBoxDesc
                :boxDesc="HomeBlogDetails[0].boxDesc"
            >
            </HomeBlogBoxDesc>
        </div>
    </div>
</template>