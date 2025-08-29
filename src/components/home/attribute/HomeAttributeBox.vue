<script setup>
import HomeAttributeDetails from "@/data/home-attribute-details.json";
import HomeAttributeBoxDesc from './HomeAttributeBoxDesc.vue';
import HomeAttributeBoxImg from './HomeAttributeBoxImg.vue';
import HomeAttributeBoxTitle from './HomeAttributeBoxTitle.vue';
</script>

<template>
    <div class="home-attribute-box-main-ctn">
        <div 
            class="home-attribute-box-mini-ctn" 
        >
            <HomeAttributeBoxImg
                :imgSrc="HomeAttributeDetail.imgSrc"
            >
            </HomeAttributeBoxImg>
            <HomeAttributeBoxTitle
                :name="HomeAttributeDetail.name"
            >
            </HomeAttributeBoxTitle>
            <HomeAttributeBoxDesc
                :description="HomeAttributeDetail.description"
            >
            </HomeAttributeBoxDesc>
        </div>
    </div>
</template>

<style scoped>
.home-attribute-box-main-ctn{
    background-color: #bdb6b6;
    padding:3vh 2vw;
}
.home-attribute-box-mini-ctn{
    display: flex;
    flex-direction: column;
    text-align: center;
}
</style>