<script setup>
const navToAboutComponent=()=>{
    const target=document.getElementById('about');
    console.log(target);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <div class="home-hero-main-desc-paragraph-arrow-main-ctn" @click="navToAboutComponent">
        <i class="fi fi-tr-arrow-down"></i> 
    </div>
</template>

<style scoped>
.home-hero-main-desc-paragraph-arrow-main-ctn i{
    font-size: 70px;
    color:#fff;
}
.home-hero-main-desc-paragraph-arrow-main-ctn:hover{
    cursor:pointer;
    will-change: transform;
    transform: scaleY(1.3);
    transition: all .8s ease;
}
</style>