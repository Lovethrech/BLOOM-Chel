<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router";
import AuthLoginDetails from "@/data/auth-login-details.json";
import AuthBookAndSignDetails from "@/data/auth-book-and-sign-details.json"; 
import AuthLoginAndRegisterHeader from './AuthLoginAndRegisterHeader.vue';
import AuthRegisterDetailsFormInput from './AuthRegisterDetailsFormInput.vue';
import AuthLoginAndRegisterBookBtn from "./AuthLoginAndRegisterBookBtn.vue";

const router=useRouter();
const inputBoxBorder=ref("0");
const email=ref("");
const password=ref("");

const bookDemo=()=>{
    if (((email.value==="")&&(password.value==="")) || ((email.value==="")||(password.value===""))){
        inputBoxBorder.value="0.02vh solid red";
    }
    else{
        router.push("/");
    }
}
</script>

<template>
    <div class="auth-register-details-ctn-main-ctn">
        <div class="auth-register-details-ctn-mini-ctn">
            <AuthLoginAndRegisterHeader></AuthLoginAndRegisterHeader>
            <form action="" class="auth-register-details-ctn-mini-ctn-form" @submit.prevent="bookDemo">
                <AuthRegisterDetailsFormInput
                    :inputBoxBorder="inputBoxBorder"
                    :name="AuthLoginDetails[0].name"
                    :placeholder="AuthLoginDetails[0].placeholder"
                    :nameFor="AuthLoginDetails[0].nameFor"
                    :nameType="AuthLoginDetails[0].nameType"
                    :vModel="email"
                >
                </AuthRegisterDetailsFormInput>
                <AuthRegisterDetailsFormInput
                    :inputBoxBorder="inputBoxBorder"
                    :name="AuthLoginDetails[1].name"
                    :placeholder="AuthLoginDetails[1].placeholder"
                    :nameFor="AuthLoginDetails[1].nameFor"
                    :nameType="AuthLoginDetails[1].nameType"
                    :vModel="password"
                >
                </AuthRegisterDetailsFormInput>
                <div class="auth-register-details-ctn-mini-ctn-form-forget-password-ctn">
                    <p class="auth-register-details-ctn-mini-ctn-form-forget-password">
                        forget password?
                    </p>
                </div>
                <br/>
                <AuthLoginAndRegisterBookBtn 
                    @click="bookDemo"
                    :btnDesc="AuthBookAndSignDetails[1].name"
                >
                </AuthLoginAndRegisterBookBtn>
            </form>
        </div>
    </div>
</template>

<style scoped>
.auth-register-details-ctn-mini-ctn-form-forget-password-ctn{
    width: 100%;
}
.auth-register-details-ctn-mini-ctn-form-forget-password{
    text-transform: capitalize;
    font-size: 1.2vh;
    font-weight: 400;
    color: #838383;
}
</style>