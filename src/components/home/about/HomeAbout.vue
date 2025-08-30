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
            <div class="home-about-mini-ctn-desktop-view">
                <HomeAboutTitle></HomeAboutTitle>
                <HomeAboutDesc></HomeAboutDesc>
                <br/>
                <TryFreeBtn
                    :tryFreeBtnBgColor="tryFreeBtnBgColor"
                    :tryFreeBtnColor="tryFreeBtnColor"
                >
                </TryFreeBtn>
            </div>
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
    height: 100vh;
    padding:4vh 6vw;
    display:flex;
    justify-content: center;
    place-items: center;
}
.home-about-mini-ctn{
    display:flex;
    flex-direction: row;
    gap:10vw;
    height: 100%;
}
.home-about-mini-ctn-desktop-view{
    width:50%;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    gap: 1vw;
}
.home-about-img{
    grid-column: 2;
    grid-row: 1;
}
.home-about-title, .home-about-desc, .try-free-btn{
    display:none;
    width:80%;
}

@media screen and (max-width:950px) and (min-height: 1000px) {
    .home-about-main-ctn{
        padding-top: 4vh;
        padding-bottom: 5vh;
        height:100%;
    }
    .home-about-mini-ctn{
        display:grid;
        height: 100%;
        gap:3vh;
    }
    .home-about-mini-ctn-desktop-view{
        display:none;
    }
    .home-about-title, .home-about-desc, .try-free-btn{
        display:flex;
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
    .home-about-desc, .try-free-btn{
        margin:0;
    }
    .home-about-title, .home-about-desc, .try-free-btn{
        width:100%;
    }
}
@media screen and (max-width: 900px) {
    .home-about-main-ctn{
        padding-top: 4vh;
        padding-bottom: 5vh;
        height:100%;
    }
    .home-about-mini-ctn{
        display:grid;
        height: 100%;
        gap:3vh;
    }
    .home-about-mini-ctn-desktop-view{
        display:none;
    }
    .home-about-title, .home-about-desc, .try-free-btn{
        display:flex;
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
    .home-about-desc, .try-free-btn{
        margin:0;
    }
    .home-about-title, .home-about-desc, .try-free-btn{
        width:100%;
    }
}
</style>