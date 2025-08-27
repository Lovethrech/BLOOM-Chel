<script setup>
import NavHeader from '@/components/nav/NavHeader.vue';
import HomeHeroMainDesc from './HomeHeroMainDesc.vue';
</script>

<template>
    <section class="home-hero-main-ctn">
        <div class="home-hero-mini-ctn">
            <NavHeader></NavHeader>
            <HomeHeroMainDesc></HomeHeroMainDesc>
            <!-- is 20MHz enough as my mifi bandwidth?... is it advisable to activate the dhcp server of my wifi?. if yes, what should the dhcp ip range from, e.g, 100 to 200, and what should my dhcp lease time be? -->
        </div>
    </section>
</template>

<style scoped>
.home-hero-main-ctn{
    width:100%;
    height:90vh;
    background: linear-gradient(to bottom, #A54dea, #594edc);
    padding:24px 80px;
}  
.home-hero-mini-ctn{
    width:inherit;
    display:flex;
    flex-direction: column;
}

@media screen and (max-width: 850px) {
    .home-hero-main-ctn{
        padding:3vh 6vw;
    }
}
</style>