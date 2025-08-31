<script setup>
import {ref} from "vue";
import NavLogo from '../nav/NavLogo.vue';
import AuthLoginBtn from './AuthLoginBtn.vue';
import AuthRegisterBtn from './AuthRegisterBtn.vue';
import AuthLoginDetailsCtn from "./AuthLoginDetailsCtn.vue";
import AuthRegisterDetailsCtn from "./AuthRegisterDetailsCtn.vue";

const displayLoginBtn=ref("block");
const displayRegisterBtn=ref("none");
const displayLoginBtnDetails=ref("block");
const displayRegisterBtnDetails=ref("none");

const openLoginDetails=()=>{
    if(displayLoginBtn.value==="block"){
        displayLoginBtn.value="none";
        displayLoginBtnDetails.value="none";
        displayRegisterBtn.value="block";
        displayRegisterBtnDetails.value="block";
    }
    else{
        displayLoginBtn.value="block";
        displayLoginBtnDetails.value="block";
        displayRegisterBtn.value="none";
        displayRegisterBtnDetails.value="none";
    }
}
</script>

<template>
    <div class="auth-header-main-ctn">
        <div class="auth-header-mini-ctn">
            <header class="auth-header-mini-ctn-header">
                <NavLogo></NavLogo>
                <AuthLoginBtn 
                    :style="{display:displayLoginBtn}"
                    @click="openLoginDetails"
                >
                </AuthLoginBtn>
                <AuthRegisterBtn 
                    :style="{display: displayRegisterBtn}"
                    @click="openLoginDetails"
                >
                </AuthRegisterBtn>
            </header>
            <div class="auth-header-mini-ctn-auth-content-ctn">
                <AuthLoginDetailsCtn :style="{display:displayLoginBtnDetails}"></AuthLoginDetailsCtn>
                <AuthRegisterDetailsCtn :style="{display:displayRegisterBtnDetails}"></AuthRegisterDetailsCtn>
            </div>
        </div>
    </div>
</template>

<style scoped>
.auth-header-main-ctn{
    width:100%;
    height: 50vh;
    background: linear-gradient(to bottom, #A54dea, #594edc);
}
.auth-header-mini-ctn{
    width:100%;
    height:48vh;
    background:  url(@/assets/auth-pattern.svg) bottom/ 100% no-repeat;
}

.auth-header-mini-ctn-header{
    padding: 3vh 4vw;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.auth-header-mini-ctn-auth-content-ctn{
    min-height:50vh;
    margin-top:20vh;
    display:flex;
    justify-content: center;
}
</style>