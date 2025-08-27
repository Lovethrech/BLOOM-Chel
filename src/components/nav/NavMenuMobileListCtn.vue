<script setup>
import {ref} from "vue";
import NavHeaderDetails from "@/data/nav-header-details.json";
import NavLink from "./NavLink.vue";
import TryFreeBtn from "../TryFreeBtn.vue";

const navLinkColor=ref("#000000");
const navLinkFontSize=ref("41px");
const tryFreeBtnBgColor=ref("linear-gradient(to bottom, #A54dea, #594edc)");
const tryFreeBtnColor=ref("#ffffff");
</script>

<template>
    <div class="nav-menu-mobile-list-ctn-main-ctn">
        <div class="nav-menu-mobile-list-ctn-mini-ctn">
            <div class="nav-menu-mobile-list-ctn-mini-ctn-nav-link">
                <NavLink
                    class="desktop-nav"
                    v-for="NavHeaderDetail in NavHeaderDetails"
                    :key="NavHeaderDetail.id"
                    :name="NavHeaderDetail.name"
                    :link="NavHeaderDetail.link"
                    :color="navLinkColor"
                    :fontSize="navLinkFontSize"
                >
                </NavLink>
                <TryFreeBtn
                    :tryFreeBtnBgColor="tryFreeBtnBgColor"
                    :tryFreeBtnColor="tryFreeBtnColor"
                >
                </TryFreeBtn>
            </div>
        </div>
    </div>
</template>

<style scoped>
.nav-menu-mobile-list-ctn-main-ctn{
    position:absolute;
    top:8vh;
    right:0;
    padding: 0 6vw;
    background-color: transparent;
    height:80vh;
}
.nav-menu-mobile-list-ctn-main-ctn, .nav-menu-mobile-list-ctn-mini-ctn, .nav-menu-mobile-list-ctn-mini-ctn-nav-link{
    width:100%;
}
.nav-menu-mobile-list-ctn-mini-ctn{
    background-color: rgb(255, 255, 255);
    height: 100%;
    padding:0 24px;
    display:flex;
    place-items: end;
}
.nav-menu-mobile-list-ctn-mini-ctn-nav-link{
    margin-bottom:10vh;
    display:flex;
    flex-direction: column;
    gap:20px;
    text-align: left;
}
</style>