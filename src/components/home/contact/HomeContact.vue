<script setup>
import HomeContactMainContent from './HomeContactMainContent.vue';
import HomeContactTitle from './HomeContactTitle.vue';
</script>

<template>
    <section class="home-contact-main-ctn">
        <div class="home-contact-main-ctn">
            <HomeContactTitle></HomeContactTitle>
            <HomeContactMainContent></HomeContactMainContent>
        </div>
    </section>
</template>

<style scoped>
.home-contact-main-ctn{
    height: 100vh;
}
</style>