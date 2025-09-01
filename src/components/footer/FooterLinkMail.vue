<template>
    <div class="footer-link-mail-main-content-link-main-ctn">
        <RouterLink to="/" class="link">
            <div class="footer-link-mail-main-content-link-mini-ctn">
                <p class="footer-link-mail-main-content-link-mini-ctn-name">
                    Send us an email
                </p>
                <i class='bx  bx-arrow-up-right-stroke'  ></i> 
            </div>
        </RouterLink>
    </div>
</template>

<style scoped>
.footer-link-mail-main-content-link-main-ctn{
    display:flex;
    justify-content: center;
}

.footer-link-mail-main-content-link-main-ctn:hover{
    cursor:pointer;
    transform: scaleX(0.98);
    transition: all .8s;
}
.footer-link-mail-main-content-link-mini-ctn{
    border-bottom: 2px solid #fff;
    width: 20vw;
    display:flex;
    flex-direction: row;
}

.footer-link-mail-main-content-link-mini-ctn-name, .footer-link-mail-main-content-link-mini-ctn i{
    color: #fff;
    font-size: 4vh;
}


.footer-link-mail-main-content-link-mini-ctn i{
    margin: auto 0;
}


@media screen and (max-width:950px) and (min-height: 1000px) {
    .footer-link-mail-main-content-link-main-ctn{
        width:100%;
        display: flex;
        justify-content: center;
    }
    .footer-link-mail-main-content-link-mini-ctn{
        width:170px;
    }
    .footer-link-mail-main-content-link-mini-ctn-name{
        font-size: 1.4vh;
    }
}
@media screen and (max-width: 850px) {
    .footer-link-mail-main-content-link-main-ctn{
        width:100%;
        display: flex;
        justify-content: center;
    }
    .footer-link-mail-main-content-link-mini-ctn{
        width:240px;
    }
    .footer-link-mail-main-content-link-mini-ctn-name{
        font-size: 14px;
    }
}
</style>