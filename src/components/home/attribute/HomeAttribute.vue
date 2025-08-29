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
            <HomeAttributeBox
                :name="HomeAttributeDetail.name"
                :imgSrc="HomeAttributeDetail.imgSrc"
                :description="HomeAttributeDetail.description"
            >
            </HomeAttributeBox>
        </div>
    </section>
</template>

<style scoped>
.home-attribute-main-ctn{
    padding:16vh 6vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    gap:3vw;
}
.home-attribute-mini-ctn{
    
}
</style>