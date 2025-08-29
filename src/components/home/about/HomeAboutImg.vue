<template>
    <div class="home-about-img-main-ctn">
        <img src="@/assets/home-about-img.svg" alt="Home About Section Image"/>
    </div>
</template>

<style scoped>
.home-about-img-main-ctn{
    width:30vw;
    height: 30vw;
}

@media screen and (min-height: 1000px) {
    .home-about-img-main-ctn{
        width: 100%;
        height:100%;
    }
}
@media screen and (max-width:900px) {
    .home-about-img-main-ctn{
        width:100%;
        height:100%;
    }
}
</style>