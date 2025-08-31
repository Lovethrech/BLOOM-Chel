<script setup>
import {ref} from "vue";
import NavLogo from '../nav/NavLogo.vue';
import AuthLoginBtn from './AuthLoginBtn.vue';
import AuthRegisterBtn from './AuthRegisterBtn.vue';
import AuthLoginDetailsCtn from "./AuthLoginDetailsCtn.vue";

const displayLoginBtn=ref("block");
const displayRegisterBtn=ref("none")
</script>

<template>
    <div class="auth-header-main-ctn">
        <div class="auth-header-mini-ctn">
            <header class="auth-header-mini-ctn-header">
                <NavLogo></NavLogo>
                <AuthLoginBtn 
                    :style="{display:displayLoginBtn}"
                >
                </AuthLoginBtn>
                <AuthRegisterBtn 
                    :style="{display: displayRegisterBtn}"
                >
                </AuthRegisterBtn>
            </header>
            <div class="auth-header-mini-ctn-auth-content-ctn">
                <AuthLoginDetailsCtn></AuthLoginDetailsCtn>
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
    min-height:90vh;
    background-color: blue;
    display:flex;
    justify-content: center;
}
</style>