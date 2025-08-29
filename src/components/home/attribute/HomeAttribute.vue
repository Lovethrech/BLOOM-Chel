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
    background-color: rgba(0, 0, 0, 0.39);
    padding:10vh 6vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    gap:3vw;
}

@media screen and (max-width:950px) and (min-height: 1000px) {
    .home-attribute-main-ctn{
        flex-direction: column;
        gap:8vh;
    }
}
@media screen and (max-width: 850px) {
    .home-attribute-main-ctn{
        flex-direction: column;
        gap:8vh;
    }
}
</style>