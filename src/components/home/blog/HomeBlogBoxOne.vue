<script setup>
import HomeBlogDetails from "@/data/home-blog-details.json";
import HomeBlogBoxOneImg from "./HomeBlogBoxOneImg.vue";
import HomeBlogBoxDesc from './HomeBlogBoxDesc.vue';
</script>

<template>
    <div class="home-blog-box-main-ctn">
        <div class="home-blog-box-mini-ctn">
            <HomeBlogBoxOneImg></HomeBlogBoxOneImg>
            <HomeBlogBoxDesc
                :boxDesc="HomeBlogDetails[0].boxDesc"
            >
            </HomeBlogBoxDesc>
        </div>
    </div>
</template>