<script setup>
import NavHeaderDetails from "@/data/nav-header-details.json";
import NavLogo from './NavLogo.vue';
import NavLink from '@/components/nav/NavLink.vue';
</script>

<template>
    <section class="nav-header-main-ctn">
        <NavLogo></NavLogo>
        <div class="nav-header-main-ctn-nav-desktop">
            <NavLink
                v-for="NavHeaderDetail in NavHeaderDetails"
                :key="NavHeaderDetail.id"
                :name="NavHeaderDetail.name"
                :link="NavHeaderDetail.link"
            >
            </NavLink>
        </div>
        <div class="home-hero-mini-ctn-nav-mobile">
            
        </div>
    </section>
</template>

<style scoped>
.nav-header-main-ctn, .nav-header-main-ctn-nav-desktop{
    display:flex;
    flex-direction: row;
}
.nav-header-main-ctn{
    width:100%;
    justify-content: space-between;
}
.nav-header-main-ctn-nav-desktop{
    gap:20px;
}
.nav-header-main-ctn-nav-mobile{
    display:none
}

@media screen and (max-width:850px) {
    .nav-header-main-ctn-nav-desktop{
        display:none;
    }
    .nav-header-main-ctn-nav-mobile{
        display:block;
    }
}
</style>