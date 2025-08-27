<template>
    <div class="home-hero-main-desc-paragraph-arrow-main-ctn" @click="toggleContent">
        <a href="">
            <i class="fi fi-tr-arrow-down"></i> 
        </a>        
    </div>
</template>

<style scoped>
.home-hero-main-desc-paragraph-arrow-main-ctn{
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