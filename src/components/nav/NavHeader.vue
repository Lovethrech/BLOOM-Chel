<script setup>
import NavHeaderDetails from "@/data/nav-header-details.json";
import NavLogo from './NavLogo.vue';
import NavLink from '@/components/nav/NavLink.vue';
</script>

<template>
    <section class="nav-header-main-ctn">
        <NavLogo></NavLogo>
        <div class="home-hero-mini-ctn-nav-desktop">
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