<script setup>
import HomeContactMainContent from './HomeContactMainContent.vue';
import HomeContactTitle from './HomeContactTitle.vue';
</script>

<template>
    <section class="home-contact-main-ctn">
        <div class="home-contact-mini-ctn">
            <HomeContactTitle></HomeContactTitle>
            <br/>
            <HomeContactMainContent></HomeContactMainContent>
        </div>
    </section>
</template>

<style scoped>
.home-contact-main-ctn{
    width:100%;
    min-height:70vh;
    padding: 10vh 0;
}
.home-contact-mini-ctn{
    height: 100%;
}
@media screen and (max-width:850px){
    .home-contact-main-ctn{
        height: 100vh;
        display:flex;
        place-items: center;
    }
}
</style>