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
    padding:4vh 4vw;
    box-shadow: 0.2vw 0.2vh 20px 20px #cdcbcd2c;
}
.home-attribute-box-mini-ctn{
    display: flex;
    flex-direction: column;
    gap:2vh;
}

@media screen and (max-width: 850px) {
    .home-attribute-box-main-ctn{
        box-shadow: 0px 7px 10px 10px #cdcbcd4f;
    }
}
</style>