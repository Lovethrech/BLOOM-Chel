<script setup>
import NavHeader from '@/components/nav/NavHeader.vue';
</script>

<template>
    <section class="home-hero-main-ctn">
        <div class="home-hero-mini-ctn">
            <NavHeader></NavHeader>
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