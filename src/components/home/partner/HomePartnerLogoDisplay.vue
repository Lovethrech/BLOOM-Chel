<script setup>
import HomePartnerLogoBox from './HomePartnerLogoBox.vue';
</script>

<template>
    <div class="home-partner-logo-display-main-ctn">
        <div class="home-partner-logo-display-mini-ctn">
            <HomePartnerLogoBox></HomePartnerLogoBox>
            <HomePartnerLogoBox></HomePartnerLogoBox>
            <HomePartnerLogoBox></HomePartnerLogoBox>
            <HomePartnerLogoBox></HomePartnerLogoBox>
        </div>
    </div>
</template>

<style scoped>
.home-partner-logo-display-main-ctn{
    padding: 6vw 0;
}
.home-partner-logo-display-mini-ctn{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    gap:6vw;
}

@media screen and (max-width:850px) {
    .home-partner-logo-display-mini-ctn{
        flex-wrap: wrap;
    }
}
</style>