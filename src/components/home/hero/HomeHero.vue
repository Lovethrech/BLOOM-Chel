<script setup>
import NavHeaderDetails from "@/data/nav-header-details.json";
import NavHeader from '@/components/nav/NavHeader.vue';
import NavLink from '@/components/nav/NavLink.vue';
</script>

<template>
    <section class="home-hero-main-ctn">
        <div class="home-hero-mini-ctn">
            <NavHeader></NavHeader>
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
        </div>
    </section>
</template>

<style scoped>
.home-hero-main-ctn{
    width:100%;
    height:90vh;
    background: linear-gradient(to bottom, #A54dea, #594edc);
    padding:24px 80px;
}  
.home-hero-mini-ctn, .home-hero-mini-ctn-nav-desktop{
    display:flex;
    flex-direction: row;
}
.home-hero-mini-ctn{
    justify-content: space-between;
}
.home-hero-mini-ctn-nav-desktop{
    gap:20px;
}
</style>