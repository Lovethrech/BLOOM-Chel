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
            <HomeAboutTitle class="home-about-title"></HomeAboutTitle>
            <HomeAboutDesc class="home-about-desc"></HomeAboutDesc>
            <TryFreeBtn
                class="try-free-btn"
                :tryFreeBtnBgColor="tryFreeBtnBgColor"
                :tryFreeBtnColor="tryFreeBtnColor"
            >
            </TryFreeBtn>
            <HomeAboutImg class="home-about-img"></HomeAboutImg>
        </div>
    </section>
</template>

<style scoped>
.home-about-main-ctn, .home-about-mini-ctn{
    width:100%;
}
.home-about-main-ctn{
    margin-top: 20vh;
    padding:0 6vw;
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;
    place-items: center;
}
.home-about-mini-ctn{
    display:grid;
    
    gap:5vw;
    height:50%;
}
.home-about-title{
    grid-column: 1;
    grid-row:1;
}
.home-about-img{
    grid-column: 2;
    grid-row: 1;
}
.home-about-desc, .try-free-btn{
    grid-column: 1;
    grid-row: 1;
    
}
.home-about-desc{
    margin-top:10vw;
}
.try-free-btn{
    margin-top:14vw;
}
.home-about-title, .home-about-desc, .try-free-btn{
    width:80%;
}

@media screen and (max-width: 900px) {
    .home-about-mini-ctn{
        height: 100%;
        gap:2vw;
    }
    .home-about-title{
        grid-column: 1;
        grid-row:1;
    }
    .home-about-img{
        grid-column: 1;
        grid-row: 2;
    }
    .home-about-desc{
        grid-column: 1;
        grid-row: 3;
    }
    .try-free-btn{
        grid-column: 1;
        grid-row: 4;
    }
}

</style>