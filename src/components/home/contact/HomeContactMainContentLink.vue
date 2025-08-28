<template>
    <div class="home-contact-main-content-link-main-ctn">
        <RouterLink to="" class="link">
            <div class="home-contact-main-content-link-mini-ctn">
                <p class="home-contact-main-content-link-mini-ctn-name">
                    contact us
                </p>
                <!-- ArrowUp Icon  -->
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
.home-contact-main-content-link-main-ctn:hover{
    cursor:pointer;
    transform: scaleX(0.98);
    transition: all .8s;
}
.home-contact-main-content-link-mini-ctn{
    border-bottom: 2px solid #fff;
    width: 6vw;
}
.home-contact-main-content-link-mini-ctn-name{
    color: #fff;
    font-size: 1vw;
    text-transform: capitalize;
}

@media screen and (max-width: 850px) {
    .home-contact-main-content-link-main-ctn{
        width:100%;
        display: flex;
        justify-content: center;
    }
    .home-contact-main-content-link-mini-ctn{
        width:80px;
    }
    .home-contact-main-content-link-mini-ctn-name{
        font-size: 14px;
    }
}
</style>