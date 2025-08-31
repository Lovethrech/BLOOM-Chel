<script setup>
import HomeTeamTitle from './HomeTeamTitle.vue';
import HomeTeamDesc from './HomeTeamDesc.vue';
</script>

<template>
    <section class="home-team-main-ctn">
        <div class="home-team-mini-ctn">
            <HomeTeamTitle></HomeTeamTitle>
            <HomeTeamDesc></HomeTeamDesc>
        </div>
    </section>
</template>

<style scoped>
.home-team-main-ctn{
    padding: 10vh 4vw;
}
</style>