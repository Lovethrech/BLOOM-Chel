<template>
    <div class="nav-logo-img-ctn">
        <img src="/public/bloom.svg" alt="Bloom Desktop Logo" class="nav-logo-desktop-logo"/>
        <img src="/publi/bloom-M-colored.svg" alt="Bloom Mobile Logo" class="nav-logo-mobile-logo"/>
    </div>
</template>

<style scoped>
.nav-logo-img-ctn{
    width:88px;
}
.nav-logo-mobile-logo{
    display: none;
}

@media screen and (max-width:850px) {
    .nav-logo-img-ctn{
        width:26px;
        height: 26px;
    }
    .nav-logo-mobile-logo{
        display: block;
    }
    .nav-logo-desktop-logo{
        display: none;
    }
}
</style>