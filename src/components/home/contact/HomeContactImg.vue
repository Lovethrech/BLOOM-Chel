<template>
    <div class="home-contact-img-main-ctn">
        <img src="@/assets/home-contact-img.svg" alt="Home Contact Image">
    </div>
</template>

<style scoped>
.home-contact-img-main-ctn{
    width: 42vw;
}
@media screen and (max-width:1380px) and (min-width: 851px){
    .home-contact-img-main-ctn{
        width:800px;
    }
}
@media screen and (min-height: 1000px) {
    .home-contact-img-main-ctn{
        width: 800px;
        margin: 0 auto;
    }
}
@media screen and (max-width: 850px) {
    .home-contact-img-main-ctn{
        margin: 0 auto;
        width: 100%;
    }
}
</style>