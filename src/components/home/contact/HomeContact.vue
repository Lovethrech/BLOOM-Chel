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
    padding: 20vh 0;
}
.home-contact-mini-ctn{
    height: 60%;
}
</style>