<script setup>
const navToAboutComponent=()=>{
    const target=document.getElementById('about');
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <div class="home-hero-main-desc-paragraph-arrow-main-ctn" @click="navToAboutComponent">
        <i class='bx  bx-arrow-down-stroke'  ></i>  
    </div>
</template>