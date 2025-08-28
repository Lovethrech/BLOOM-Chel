<script setup>
import HomeContactImg from './HomeContactImg.vue';
import HomeContactMainContentDesc from './HomeContactMainContentDesc.vue';
import HomeContactMainContentLink from './HomeContactMainContentLink.vue';
</script>

<template>
    <div class="home-contact-main-content-main-ctn">
        <HomeContactImg></HomeContactImg>
        <div class="home-contact-main-content-mini-ctn">
            <HomeContactMainContentDesc></HomeContactMainContentDesc>
            <HomeContactMainContentLink></HomeContactMainContentLink>
        </div>
    </div>
</template>

<style scoped>
.home-contact-main-content-main-ctn{
    padding: 4vh 6vw;
    display:flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap:10vw;
    background: linear-gradient(to bottom, #A54dea, #594edc);
    width:100%;
    height:60vh;
}
</style>