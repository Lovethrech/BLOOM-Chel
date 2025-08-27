<script setup>
import {ref} from "vue";
import NavHeaderDetails from "@/data/nav-header-details.json";
import NavLink from "./NavLink.vue";

const navLinkColor=ref("#000000");
const navLinkFontSize=ref("41px");
</script>

<template>
    <div class="nav-menu-mobile-list-ctn-main-ctn">
        <div class="nav-menu-mobile-list-ctn-mini-ctn">
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
        </div>
    </div>
</template>

<style scoped>
.nav-menu-mobile-list-ctn-main-ctn{
    position:absolute;
    top:8.2vh;
    right:0;
    padding: 0 6vw;
    background-color: transparent;
    height:200px;
}
.nav-menu-mobile-list-ctn-main-ctn, .nav-menu-mobile-list-ctn-mini-ctn{
    width:100%;
}
.nav-menu-mobile-list-ctn-mini-ctn{
    background-color: rgb(212, 210, 214);
    height: 100%;
    display:flex;
    flex-direction: column;
    gap:20px;
    text-align: center;
}
</style>