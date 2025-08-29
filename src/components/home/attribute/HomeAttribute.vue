<script setup>
import HomeAttributeDetails from "@/data/home-attribute-details.json";
import HomeAttributeBox from './HomeAttributeBox.vue';
</script>

<template>
    <section class="home-attribute-main-ctn">
        <div 
            class="home-attribute-mini-ctn"
            v-for="HomeAttributeDetail in HomeAttributeDetails"
            :key="HomeAttributeDetail.id"
        >
            <HomeAttributeBox></HomeAttributeBox>
        </div>
    </section>
</template>

<style scoped>
.home-attribute-main-ctn{
    padding:16vh 6vw;
}
.home-attribute-mini-ctn{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    gap:3vw;
}
</style>