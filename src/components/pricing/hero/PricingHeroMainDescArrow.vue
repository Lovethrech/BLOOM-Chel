<script setup>
const navToAboutComponent=()=>{
    const target=document.getElementById('package');
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <div class="home-hero-main-desc-paragraph-arrow-main-ctn" @click="navToAboutComponent">
        <i class='bx bx-arrow-back bx-rotate-270' ></i> 
    </div>
</template>