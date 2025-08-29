<script setup>
import HomeBlogDetails from "@/data/home-blog-details.json";
import HomeBlogBoxDesc from './HomeBlogBoxDesc.vue';
</script>

<template>
    <div class="home-blog-box-main-ctn">
        <div class="home-blog-box-mini-ctn">
            <HomeBlogBoxDesc
                :boxDesc="HomeBlogDetails[0].boxDesc"
            >
            </HomeBlogBoxDesc>
        </div>
    </div>
</template>

<style scoped>
.home-blog-box-main-ctn{
    background-color: green;
    background: url(@/assets/home-blog-img-three.svg) top no-repeat;
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