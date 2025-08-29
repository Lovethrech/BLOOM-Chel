<script setup>
import HomeContactImg from './HomeContactImg.vue';
import HomeContactMainContentDesc from './HomeContactMainContentDesc.vue';
import HomeContactMainContentLink from './HomeContactMainContentLink.vue';
</script>

<template>
    <div class="home-contact-main-content-main-ctn">
        <div class="home-contact-main-content-main-ctn-main">
            <HomeContactImg></HomeContactImg>
            <div class="home-contact-main-content-mini-ctn">
                <HomeContactMainContentDesc></HomeContactMainContentDesc>
                <br/>
                <HomeContactMainContentLink></HomeContactMainContentLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-contact-main-content-main-ctn, .home-contact-main-content-main-ctn-main{
    display:flex;
}
.home-contact-main-content-main-ctn{
    padding: 6vh 6vw;
    background: linear-gradient(to bottom, #A54dea, #594edc);
    width:100%;
    justify-content: center;
    place-items: center;
}
.home-contact-main-content-main-ctn-main{
    flex-direction: row-reverse;
    justify-content: space-between;
    gap:10vw;
}
.home-contact-main-content-mini-ctn{
    margin: auto 0;
}

@media screen and (max-width:950px) and (min-height: 1000px) {
    .home-contact-main-content-main-ctn{
        flex-direction: column;
        gap:0;
    }
}
@media screen and (max-width: 850px) {
    .home-contact-main-content-main-ctn{
        height: 90%;
    }
    .home-contact-main-content-main-ctn-main{
        flex-direction: column;
        gap:0;
    }
}
</style>