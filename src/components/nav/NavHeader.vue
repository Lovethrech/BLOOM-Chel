<script setup>
import {ref} from "vue";
import NavHeaderDetails from "@/data/nav-header-details.json";
import NavLogo from './NavLogo.vue';
import NavLink from '@/components/nav/NavLink.vue';
import NavMenu from "./NavMenu.vue";
import NavMenuMobileListCtn from "./NavMenuMobileListCtn.vue";
import TryFreeBtn from "../TryFreeBtn.vue";

const navLinkColor=ref("#ffffff");
const navLinkFontSize=ref("16px");
const tryFreeBtnBgColor=ref("#ffffff");
const tryFreeBtnColor=ref("#A54dea");
</script>

<template>
    <section class="nav-header-main-ctn">
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
                :tryFreeBtnBgColor="tryFreeBtnBgColor"
                :tryFreeBtnColor="tryFreeBtnColor"
            >
            </NavLink>
            <TryFreeBtn></TryFreeBtn>
            <NavMenu class="mobile-nav-menu"></NavMenu>
            <NavMenuMobileListCtn class="mobile-nav"></NavMenuMobileListCtn>
        </div>
    </section>
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
.mobile-nav, .mobile-nav-menu{
    display:none;
}

@media screen and (max-width:850px) {
    .nav-header-main-ctn{
        background-color: #fff;
        padding:12px;
    }
    .desktop-nav{
        display:none;
    }
    .mobile-nav, .mobile-nav-menu{
        display:block;
    }
}
</style>