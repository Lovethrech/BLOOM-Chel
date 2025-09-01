<script setup>
const navToAboutComponent=()=>{
    const target=document.getElementById('package');
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <div class="home-hero-main-desc-paragraph-arrow-main-ctn" @click="navToAboutComponent">
        <img src="@/assets/hero-arrow.svg" alt="Hero ArrowDown">
    </div>
</template>