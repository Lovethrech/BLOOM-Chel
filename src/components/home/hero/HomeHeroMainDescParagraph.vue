<template>
    <div class="home-hero-main-desc-paragraph-main-ctn">
        <p class="home-hero-main-desc-paragraph-main-ctn-name-desktop">
            In March 2021, we set out on a journey to transform <br/>
            healthcare in Africa, one solution at a time
        </p>
        <p class="home-hero-main-desc-paragraph-main-ctn-name-mobile">
            remote - paperless - advanced <br/>
            financial management
        </p>
    </div>
</template>

<style scoped>
.home-hero-main-desc-paragraph-main-ctn p{
    font-size:16px;
    color: #fff;
}
.home-hero-main-desc-paragraph-main-ctn-name-mobile{
    display: none;
    text-transform: uppercase;
}

@media screen and (max-width:850px) {
    .home-hero-main-desc-paragraph-main-ctn-name-desktop{
        display: none;
    }
    .home-hero-main-desc-paragraph-main-ctn-name-mobile{
        display: flex;
    }
}
</style>