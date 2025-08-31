<script setup>
import HomeTeamTitle from './HomeTeamTitle.vue';
import HomeTeamDesc from './HomeTeamDesc.vue';
import HomeTeamBoxOne from './HomeTeamBoxOne.vue';
import HomeTeamBoxTwo from './HomeTeamBoxTwo.vue';
</script>

<template>
    <section class="home-team-main-ctn">
        <div class="home-team-mini-ctn">
            <HomeTeamTitle></HomeTeamTitle>
            <HomeTeamDesc></HomeTeamDesc>
            <div class="home-team-box">
                <HomeTeamBoxOne></HomeTeamBoxOne>
                <HomeTeamBoxTwo></HomeTeamBoxTwo>
            </div>
        </div>
    </section>
</template>

<style scoped>
.home-team-main-ctn{
    padding: 10vh 4vw;
}
.home-team-box{
    display:flex;
    flex-direction: row;
    justify-content: center;
    gap:2px;
}
</style>