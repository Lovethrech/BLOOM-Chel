<script setup>
import {ref} from "vue";
import HomeAboutTitle from './HomeAboutTitle.vue';
import HomeAboutDesc from './HomeAboutDesc.vue';
import TryFreeBtn from '@/components/TryFreeBtn.vue';
import HomeAboutImg from './HomeAboutImg.vue';

const tryFreeBtnBgColor=ref("linear-gradient(to bottom, #A54dea, #594edc)");
const tryFreeBtnColor=ref("#ffffff");
</script>

<template>
    <section id="about" class="home-about-main-ctn">
        <div class="home-about-mini-ctn">
            <div class="home-about-mini-ctn-grid-layout">
                <HomeAboutTitle class="home-about-title"></HomeAboutTitle>
                <HomeAboutDesc class="home-about-desc"></HomeAboutDesc>
                <TryFreeBtn
                    class="try-free-btn"
                    :tryFreeBtnBgColor="tryFreeBtnBgColor"
                    :tryFreeBtnColor="tryFreeBtnColor"
                >
                </TryFreeBtn>
            </div>
            <HomeAboutImg class="home-about-img"></HomeAboutImg>
        </div>
    </section>
</template>

<style scoped>
.home-about-main-ctn{
    margin-top: 20vh;
    padding:0 80px;
    background-color: aquamarine;
    width:100%;
    height:100vh;
}
.home-about-mini-ctn{
    display:flex;
    flex-direction: row;
}
.home-about-mini-ctn-grid-layout{
    display:grid;
}
.home-about-title, .home-about-desc, .home-about-img, .try-free-btn{
    width:50%;
}
.home-about-title{
    background-color: red;
    grid-column: 1;
    grid-row: 1;
}
.home-about-desc{
    grid-column: 1;
    grid-row: 2;
}
.try-free-btn{
    grid-column: 1;
    grid-row: 3;
}
.home-about-img{
    grid-column: 2;
    grid-row: 1,2,3;
    height:100%;
}
</style>