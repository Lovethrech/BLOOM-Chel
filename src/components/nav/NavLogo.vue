<template>
    <div class="nav-logo-img-ctn">
        <RouterLink to="/" class="link">
            <img src="@/assets/bloom.svg" alt="Bloom Desktop Logo" class="nav-logo-desktop-logo"/>
            <img src="@/assets/bloom-M-colored.svg" alt="Bloom Mobile Logo" class="nav-logo-mobile-logo">
        </RouterLink>
    </div>
</template>

<style scoped>
.nav-logo-img-ctn{
    width: 3vw;
    margin: auto 0;
}
.nav-logo-mobile-logo{
    display: none;
}

@media screen and (max-width:1110px) and (min-width:851px) {
    .nav-logo-img-ctn{
        width:70px;
    }
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