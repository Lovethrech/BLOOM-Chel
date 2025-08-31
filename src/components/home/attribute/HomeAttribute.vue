<script setup>
import HomeAttributeDetails from "@/data/home-attribute-details.json";
import HomeAttributeBox from './HomeAttributeBox.vue';
</script>

<template>
    <section class="home-attribute-main-ctn">
        <div 
            class="home-attribute-mini-ctn"
        >
            <HomeAttributeBox
                v-for="HomeAttributeDetail in HomeAttributeDetails"
                :key="HomeAttributeDetail.id"
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
    min-height: 70vh;
    padding:10vh 6vw;
    text-align: center;
    
}
.home-attribute-mini-ctn{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap:3vw;
}

@media screen and (max-width:950px) and (min-height: 1000px) {
    .home-attribute-mini-ctn{
        flex-direction: column;
        gap:8vh;
    }
}
@media screen and (max-width: 850px) {
    .home-attribute-mini-ctn{
        flex-direction: column;
        gap:8vh;
    }
}
</style>