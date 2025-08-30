<script setup>
import HomeBlogDetails from "@/data/home-blog-details.json";
import HomeBlogBoxTwoImg from "./HomeBlogBoxTwoImg.vue";
import HomeBlogBoxDesc from './HomeBlogBoxDesc.vue';
</script>

<template>
    <div class="home-blog-box-main-ctn">
        <div class="home-blog-box-mini-ctn">
            <HomeBlogBoxTwoImg></HomeBlogBoxTwoImg>
            <HomeBlogBoxDesc
                :boxDesc="HomeBlogDetails[1].boxDesc"
            >
            </HomeBlogBoxDesc>
        </div>
    </div>
</template>