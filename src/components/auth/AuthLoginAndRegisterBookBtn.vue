<template>
    <RouterLink to="">
        <div class="auth-login-and-register-book-btn-main-ctn">
            <p class="auth-login-and-register-book-btn-main-ctn-name">
                book demo
            </p>
        </div>
    </RouterLink>
</template>

<style scoped>
.auth-login-and-register-book-btn-main-ctn{
    background: linear-gradient(to bottom, #A54dea, #594edc);
    color:#fff;
    padding: 1vh 2vw;
    border-radius: 20vh;
    text-align:center;
}
.auth-login-and-register-book-btn-main-ctn-name{
    text-transform: capitalize;
    font-size: 2vh;
}
.auth-login-and-register-book-btn-main-ctn:hover{
    cursor:pointer;
    transform:scale(0.98);
    transition: all .4s;
}
</style>