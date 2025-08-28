<template>
    <div class="home-about-img-main-ctn">
        <img src="@/assets/home-about-img.svg" alt="Home About Section Image"/>
    </div>
</template>

<style scoped>
.home-about-img-main-ctn{
    background-color: red;
    width:30vw;
    height: 30vw;
}
.home-about-img-main-ctn img{
    background-color: chartreuse;
}

@media screen and (max-width:900px) {
    .home-about-img-main-ctn{
        width:100%;
        height:100%;
    }
}
</style>