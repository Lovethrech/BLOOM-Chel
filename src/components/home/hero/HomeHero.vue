<script setup>
import NavHeader from '@/components/nav/NavHeader.vue';
import HomeHeroMainDesc from './HomeHeroMainDesc.vue';
</script>

<template>
    <section class="home-hero-main-ctn">
        <div class="home-hero-mini-ctn">
            <NavHeader></NavHeader>
            <HomeHeroMainDesc></HomeHeroMainDesc>
        </div>
    </section>
</template>

<style scoped>
.home-hero-main-ctn{
    width:100%;
    height:90vh;
    background: linear-gradient(to bottom, #A54dea, #594edc);
    padding: 2vh 6vw;
}  
.home-hero-mini-ctn{
    width:inherit;
    display:flex;
    flex-direction: column;
    gap:20px;
}

@media screen and (max-width: 850px) {
    .home-hero-main-ctn{
        padding:3vh 6vw;
    }
}
</style>