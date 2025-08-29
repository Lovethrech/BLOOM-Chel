<template>
    <div class="home-blog-box-main-ctn">
        <div class="home-blog-box-mini-ctn">

        </div>
    </div>
</template>

<style scoped>
.home-blog-box-main-ctn{
    background-color: green;
    background: url(@/assets/home-blog-img-two.svg) top no-repeat;
    background-size: cover;
    width:27vw;
    min-height:30vw;
}

@media screen and (max-width:900px) {
    .home-blog-box-main-ctn{
        width:100%;
        min-height: 500px;
    }
}
</style>