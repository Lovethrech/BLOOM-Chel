<script setup>
import NavHeader from '@/components/nav/NavHeader.vue';
import NavLink from '@/components/nav/NavLink.vue';
</script>

<template>
    <section class="home-hero-main-ctn">
        <div class="home-hero-mini-ctn">
            <NavHeader></NavHeader>
            <div class="home-hero-mini-ctn-nav">
                <NavLink></NavLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
.home-hero-main-ctn{
    width:100%;
    height:90vh;
    background: linear-gradient(to bottom, #A54dea, #594edc);
    padding:24px;
}
</style>