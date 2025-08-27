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
    display:flex;
    justify-content: center;
    place-items: center;
}
.home-about-mini-ctn{
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    height:80%;
    background-color: red;
}
.home-about-mini-ctn-grid-layout{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding:30px 0 ;
    gap:10px;
}
.home-about-title, .home-about-desc, .try-free-btn{
    width:100%;
}

</style>