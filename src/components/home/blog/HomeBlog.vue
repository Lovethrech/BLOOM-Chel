<script setup>
import HomeBlogBoxMainCtn from './HomeBlogBoxMainCtn.vue';
import HomeBlogDesc from './HomeBlogDesc.vue';
import HomeBlogTitle from './HomeBlogTitle.vue';
</script>

<template>
    <section class="home-blog-main-ctn">
        <div class="home-blog-mini-ctn">
            <HomeBlogTitle></HomeBlogTitle>
            <HomeBlogDesc></HomeBlogDesc>
            <HomeBlogBoxMainCtn></HomeBlogBoxMainCtn>
        </div>
    </section>
</template>

<style scoped>
.home-blog-main-ctn{
    width:100%;
    height: 100vh;
    padding: 12vh 6vw;
    display:flex;
    justify-content: center;
    place-items: center;
}
.home-blog-mini-ctn{
    width:100%;
    height: 100%;
    background-color: aquamarine;
}
</style>