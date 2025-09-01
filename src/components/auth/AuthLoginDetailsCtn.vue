<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router";
import AuthLoginDetails from "@/data/auth-login-details.json";
import AuthLoginAndRegisterHeader from './AuthLoginAndRegisterHeader.vue';
import AuthRegisterDetailsFormInput from './AuthRegisterDetailsFormInput.vue';
import AuthLoginAndRegisterBookBtn from "./AuthLoginAndRegisterBookBtn.vue";

const router=useRouter();
const inputBoxBorder=ref("0");
const name=ref("");
const clientName=ref("");
const email=ref("");
const phoneNumber=ref("");

const bookDemo=()=>{
    if (((name.value==="")&&(clientName.value==="")&&(email.value==="")&&(phoneNumber.value==="")) || ((name.value==="")||(clientName.value==="")||(email.value==="")||(phoneNumber.value===""))){
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
                    :vModel="name"
                >
                </AuthRegisterDetailsFormInput>
                <AuthRegisterDetailsFormInput
                    :inputBoxBorder="inputBoxBorder"
                    :name="AuthLoginDetails[1].name"
                    :placeholder="AuthLoginDetails[1].placeholder"
                    :nameFor="AuthLoginDetails[1].nameFor"
                    :nameType="AuthLoginDetails[1].nameType"
                    :vModel="clientName"
                >
                </AuthRegisterDetailsFormInput>
                <br/>
                <AuthLoginAndRegisterBookBtn @click="bookDemo"></AuthLoginAndRegisterBookBtn>
            </form>
        </div>
    </div>
</template>

<style scoped>
.auth-register-details-ctn-main-ctn{
    width: 40%;
    min-height: 60vh;
    padding:4vh 3vw;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 7px 10px 10px #cdcbcd4f;
}
.auth-register-details-ctn-mini-ctn-form{
    margin-top: 3vh;
    display:flex;
    flex-direction: column;
    gap: 2vh;
}
</style>