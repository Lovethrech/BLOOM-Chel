<script setup>
import HomePartnerTitle from './HomePartnerTitle.vue';
import hOmePartnerDesc from './hOmePartnerDesc.vue';
import HomePartnerLogoDisplay from './HomePartnerLogoDisplay.vue';
</script>

<template>
    <section class="home-partner-main-ctn">
        <div class="home-partner-mini-ctn">
            <HomePartnerTitle></HomePartnerTitle>
            <hOmePartnerDesc></hOmePartnerDesc>
            <HomePartnerLogoDisplay></HomePartnerLogoDisplay>
        </div>
    </section>
</template>

<style scoped>
.home-partner-main-ctn{
    padding: 10vh 4vw; 
}
</style>