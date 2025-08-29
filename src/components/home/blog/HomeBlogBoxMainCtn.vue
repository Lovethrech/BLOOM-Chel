<script setup>
import HomeBlogBox from './HomeBlogBox.vue';
</script>

<template>
    <div class="home-bog-box-main-ctn-main-ctn">
        <div class="home-bog-box-main-ctn-mini-ctn">
            <HomeBlogBox></HomeBlogBox>
            <HomeBlogBox></HomeBlogBox>
            <HomeBlogBox></HomeBlogBox>
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
</style>