<template>
    <div class="auth-register-details-google-main-ctn">
        <RouterLink to="/" class="link">
            <button class="auth-register-details-google-main-ctn-button">
                <div class="auth-register-details-google-main-ctn-button-img-ctn">
                    <img src="@/assets/flat-color-icons_google.svg" alt="">
                </div>
                <p class="auth-register-details-google-main-ctn-button-name">
                    Sign up with Google
                </p>
            </button>
        </RouterLink>
    </div>
</template>

<style scoped>
.auth-register-details-google-main-ctn, .auth-register-details-google-main-ctn-button{
    display:flex;
}
.auth-register-details-google-main-ctn{
    width: 100%;
    margin-top: 3vh;
    justify-content: center;
    place-items: center;
}
.auth-register-details-google-main-ctn-button{
    background-color: transparent;
    padding:0.6vh 1vw;
    border-radius: 2.7vh;
    flex-direction: row;
    gap:0.4vw;
}
.auth-register-details-google-main-ctn-button i{
    font-size:2vh;
}
.auth-register-details-google-main-ctn-button:hover{
    cursor: pointer;
}
.auth-register-details-google-main-ctn-button-img-ctn{
    width:1.6vh;
}
.auth-register-details-google-main-ctn-button-name{
    font-size: 1.4vh;
    margin:auto 0;
}
</style>