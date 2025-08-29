<script setup>
import HomeBlogDetails from "@/data/home-blog-details.json";
import HomeBlogBox from './HomeBlogBox.vue';
</script>

<template>
    <div class="home-bog-box-main-ctn-main-ctn">
        <div 
            class="home-bog-box-main-ctn-mini-ctn"
            v-for="HomeBlogDetail in HomeBlogDetails"
            :key="HomeBlogDetail.id"
        >
            <HomeBlogBox
                :bgImgSrc="HomeBlogDetail.bgImgSrc"
                :boxDesc="HomeBlogDetail.boxDesc"
            >
            </HomeBlogBox>
        </div>
    </div>
</template>

<style scoped>
.home-bog-box-main-ctn-main-ctn, .home-bog-box-main-ctn-mini-ctn{
    width:100%;
    display:flex;
}
.home-bog-box-main-ctn-main-ctn{
    height:80%;
    place-items: center;
}
.home-bog-box-main-ctn-mini-ctn{
    flex-direction: row;
    justify-content: space-between;
}
@media screen and (max-width:900px) {
    .home-bog-box-main-ctn-mini-ctn{
        flex-direction: column;
        gap: 2vh
    }
}
</style>