<script setup>
import HomePartnerLogoDetails from "@/data/home-partner-logo-details.json";
import HomePartnerLogoBox from './HomePartnerLogoBox.vue';
</script>

<template>
    <div class="home-partner-logo-display-main-ctn">
        <div class="home-partner-logo-display-mini-ctn">
            <HomePartnerLogoBox
                v-for="HomePartnerLogoDetail in HomePartnerLogoDetails"
                :key="HomePartnerLogoDetail.id"
                :imgSrc="HomePartnerLogoDetail.imgSrc"
                :imgName="HomePartnerLogoDetail.imgName"
            >
            </HomePartnerLogoBox>
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
    gap:2vw;
}

@media screen and (max-width:850px) {
    .home-partner-logo-display-mini-ctn{
        flex-wrap: wrap;
    }
}
</style>