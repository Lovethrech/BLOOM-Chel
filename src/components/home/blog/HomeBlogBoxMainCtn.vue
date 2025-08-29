<script setup>
import HomeBlogDetails from "@/data/home-blog-details.json";
import HomeBlogBox from './HomeBlogBox.vue';
</script>

<template>
    <div class="home-bog-box-main-ctn-main-ctn">
        <div 
            class="home-bog-box-main-ctn-mini-ctn"
        >
            <HomeBlogBox
                :bgImgSrc="HomeBlogDetails[0].bgImgSrc"
                :boxDesc="HomeBlogDetails[0].boxDesc"
            >
            </HomeBlogBox>
            <!-- <HomeBlogBox
                :bgImgSrc="HomeBlogDetails[1].bgImgSrc"
                :boxDesc="HomeBlogDetails[1].boxDesc"
            >
            </HomeBlogBox>
            <HomeBlogBox
                :bgImgSrc="HomeBlogDetails[2].bgImgSrc"
                :boxDesc="HomeBlogDetails[2].boxDesc"
            >
            </HomeBlogBox> -->
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