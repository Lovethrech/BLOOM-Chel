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
            <br/>
            <HomeContactMainContentLink></HomeContactMainContentLink>
        </div>
    </div>
</template>

<style scoped>
.home-contact-main-content-main-ctn{
    padding: 6vh 6vw;
    display:flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap:10vw;
    background: linear-gradient(to bottom, #A54dea, #594edc);
    width:100%;
}
.home-contact-main-content-mini-ctn{
    margin: auto 0;
}

@media screen and (min-height: 1000px) {
    .home-contact-main-content-main-ctn{
        flex-direction: column;
        gap:0;
    }
}
@media screen and (max-width: 850px) {
    .home-contact-main-content-main-ctn{
        flex-direction: column;
        gap:0;
    }
}
</style>