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
            <br/>
            <HomeBlogBoxMainCtn></HomeBlogBoxMainCtn>
        </div>
    </section>
</template>

<style scoped>
.home-blog-main-ctn, .home-blog-mini-ctn{
    width:100%;
}
.home-blog-main-ctn{
    height: 100vh;
    padding: 12vh 6vw;
    display:flex;
    justify-content: center;
    place-items: center;
}
.home-blog-mini-ctn{
    height: 100%;
}
</style>