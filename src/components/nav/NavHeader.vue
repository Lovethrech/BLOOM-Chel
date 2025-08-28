<script setup>
import {ref} from "vue";
import NavHeaderDetails from "@/data/nav-header-details.json";
import NavLogo from './NavLogo.vue';
import NavLink from '@/components/nav/NavLink.vue';
import NavMenu from "./NavMenu.vue";
import NavMenuMobileListCtn from "./NavMenuMobileListCtn.vue";
import TryFreeBtn from "../TryFreeBtn.vue";

const navLinkColor=ref("#ffffff");
const navLinkFontSize=ref("1.4vh");
const tryFreeBtnBgColor=ref("#ffffff");
const tryFreeBtnColor=ref("#A54dea");
const displayNavMenuMobileListCtn=ref("none");
const navMenuActiveIcon=ref("<i class='fi fi-tc-menu-burger'></i>");

const navMenuDisplayMenu=()=>{
    if (navMenuActiveIcon.value==="<i class='fi fi-tc-menu-burger'></i>"){
        navMenuActiveIcon.value="<i class='fi fi-br-cross-small'></i>";
        displayNavMenuMobileListCtn.value="block";
    }
    else{
        navMenuActiveIcon.value="<i class='fi fi-tc-menu-burger'></i>";
        displayNavMenuMobileListCtn.value="none";
    }
}
</script>

<template>
    <header class="nav-header-main-ctn">
        <NavLogo></NavLogo>
        <div class="nav-header-main-ctn-nav">
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
                class="nav-header-try-free"
                :tryFreeBtnBgColor="tryFreeBtnBgColor"
                :tryFreeBtnColor="tryFreeBtnColor"
            >
            </TryFreeBtn>
            <NavMenu 
                class="mobile-nav-menu"
                :navMenuActiveIcon="navMenuActiveIcon"
                @click="navMenuDisplayMenu"
            >
            </NavMenu>
            <NavMenuMobileListCtn 
                class="mobile-nav" 
                :style="{display:displayNavMenuMobileListCtn}"
            >
            </NavMenuMobileListCtn>
        </div>
    </header>
</template>

<style scoped>
.nav-header-main-ctn, .nav-header-main-ctn-nav{
    display:flex;
    flex-direction: row;
}
.nav-header-main-ctn{
    width:100%;
    justify-content: space-between;
}
.nav-header-main-ctn-nav{
    gap:20px;
}
.mobile-nav-menu{
    display:none;
}

@media screen and (max-width:850px) {
    .nav-header-main-ctn{
        background-color: #fff;
        padding:12px;
    }
    .desktop-nav, .nav-header-try-free{
        display:none;
    }
    .mobile-nav-menu{
        display:block;
    }
}
</style>