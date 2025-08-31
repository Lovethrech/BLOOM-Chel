<template>
    <div class="auth-register-details-google-main-ctn">
        <RouterLink to="/" class="link">
            <button class="auth-register-details-google-main-ctn-button">
                <!-- google icon  -->
                <p class="auth-register-details-google-main-ctn-button-name">
                    Sign up with Google
                </p>
            </button>
        </RouterLink>
    </div>
</template>

<style scoped>
.auth-register-details-google-main-ctn{
    width: 100%;
    margin-top: 3vh;
    display:flex;
    justify-content: center;
    place-items: center;
}
.auth-register-details-google-main-ctn-button{
    background-color: transparent;
    padding:0.6vh 1vw;
    border-radius: 20vw;
}
.auth-register-details-google-main-ctn-button:hover{
    cursor: pointer;
}
</style>