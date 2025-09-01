<script setup>
import {ref} from "vue";
import AuthRegisterDetails from "@/data/auth-register-details.json";
import AuthLoginAndRegisterHeader from './AuthLoginAndRegisterHeader.vue';
import AuthRegisterDetailsFormInput from './AuthRegisterDetailsFormInput.vue';

const name=ref("");
const clientName=ref("");
const email=ref("");
const phoneNumber=ref("");
</script>

<template>
    <div class="auth-register-details-ctn-main-ctn">
        <div class="auth-register-details-ctn-mini-ctn">
            <AuthLoginAndRegisterHeader></AuthLoginAndRegisterHeader>
            <form action="" class="auth-register-details-ctn-mini-ctn-form">
                <AuthRegisterDetailsFormInput
                    :name="AuthRegisterDetails[0].name"
                    :placeholder="AuthRegisterDetails[0].placeholder"
                    :nameFor="AuthRegisterDetails[0].nameFor"
                    :nameType="AuthRegisterDetails[0].nameType"
                    :vModel="name"
                >
                </AuthRegisterDetailsFormInput>
                <AuthRegisterDetailsFormInput
                    :name="AuthRegisterDetails[1].name"
                    :placeholder="AuthRegisterDetails[1].placeholder"
                    :nameFor="AuthRegisterDetails[1].nameFor"
                    :nameType="AuthRegisterDetails[1].nameType"
                    :vModel="name"
                >
                </AuthRegisterDetailsFormInput>
                <AuthRegisterDetailsFormInput
                    :name="AuthRegisterDetails[2].name"
                    :placeholder="AuthRegisterDetails[2].placeholder"
                    :nameFor="AuthRegisterDetails[2].nameFor"
                    :nameType="AuthRegisterDetails[2].nameType"
                    :vModel="name"
                >
                </AuthRegisterDetailsFormInput>
                <AuthRegisterDetailsFormInput
                    :name="AuthRegisterDetails[3].name"
                    :placeholder="AuthRegisterDetails[3].placeholder"
                    :nameFor="AuthRegisterDetails[3].nameFor"
                    :nameType="AuthRegisterDetails[3].nameType"
                    :vModel="name"
                >
                </AuthRegisterDetailsFormInput>
            </form>
        </div>
    </div>
</template>

<style scoped>
.auth-register-details-ctn-main-ctn{
    width: 40%;
    height: 60vh;
    padding:4vh 3vw;
    background-color: rgb(255, 255, 255);
    border: 2px solid orange;
}
.auth-register-details-ctn-mini-ctn{
}
.auth-register-details-ctn-mini-ctn-form{
    margin-top: 3vh;
}
</style>