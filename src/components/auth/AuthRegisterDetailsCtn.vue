<script setup>
import {ref} from "vue";
import { useRouter } from "vue-router";
import AuthRegisterDetails from "@/data/auth-register-details.json";
import AuthBookAndSignDetails from "@/data/auth-book-and-sign-details.json"; 
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
                    :name="AuthRegisterDetails[0].name"
                    :placeholder="AuthRegisterDetails[0].placeholder"
                    :nameFor="AuthRegisterDetails[0].nameFor"
                    :nameType="AuthRegisterDetails[0].nameType"
                    :vModel="name"
                >
                </AuthRegisterDetailsFormInput>
                <AuthRegisterDetailsFormInput
                    :inputBoxBorder="inputBoxBorder"
                    :name="AuthRegisterDetails[1].name"
                    :placeholder="AuthRegisterDetails[1].placeholder"
                    :nameFor="AuthRegisterDetails[1].nameFor"
                    :nameType="AuthRegisterDetails[1].nameType"
                    :vModel="clientName"
                >
                </AuthRegisterDetailsFormInput>
                <AuthRegisterDetailsFormInput
                    :inputBoxBorder="inputBoxBorder"
                    :name="AuthRegisterDetails[2].name"
                    :placeholder="AuthRegisterDetails[2].placeholder"
                    :nameFor="AuthRegisterDetails[2].nameFor"
                    :nameType="AuthRegisterDetails[2].nameType"
                    :vModel="email"
                >
                </AuthRegisterDetailsFormInput>
                <AuthRegisterDetailsFormInput
                    :inputBoxBorder="inputBoxBorder"
                    :name="AuthRegisterDetails[3].name"
                    :placeholder="AuthRegisterDetails[3].placeholder"
                    :nameFor="AuthRegisterDetails[3].nameFor"
                    :nameType="AuthRegisterDetails[3].nameType"
                    :vModel="phoneNumber"
                >
                </AuthRegisterDetailsFormInput>
                <br/>
                <AuthLoginAndRegisterBookBtn 
                    @click="bookDemo"
                    :btnDesc="AuthBookAndSignDetails[0].name"
                >
                </AuthLoginAndRegisterBookBtn>
            </form>
        </div>
    </div>
</template>