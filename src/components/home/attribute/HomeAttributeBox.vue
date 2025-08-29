<script setup>
import { defineProps } from 'vue';
import HomeAttributeBoxDesc from './HomeAttributeBoxDesc.vue';
import HomeAttributeBoxImg from './HomeAttributeBoxImg.vue';
import HomeAttributeBoxTitle from './HomeAttributeBoxTitle.vue';

const {name, imgSrc, description}=defineProps(['name', 'imgSrc', 'description']);
</script>

<template>
    <div class="home-attribute-box-main-ctn">
        <div 
            class="home-attribute-box-mini-ctn" 
        >
            <HomeAttributeBoxImg
                :imgSrc="imgSrc"
            >
            </HomeAttributeBoxImg>
            <HomeAttributeBoxTitle
                :name="name"
            >
            </HomeAttributeBoxTitle>
            <HomeAttributeBoxDesc
                :description="description"
            >
            </HomeAttributeBoxDesc>
        </div>
    </div>
</template>

<style scoped>
.home-attribute-box-main-ctn{
    background-color: #ffffff;
    padding:3vh 2vw;
    box-shadow: 0px 7px 100px 27px #cccbcc;
}
</style>