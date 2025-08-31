<script setup>
import AuthRegisterDetails from "@/data/auth-register-details.json";
import AuthLoginAndRegisterHeader from './AuthLoginAndRegisterHeader.vue';
import AuthRegisterDetailsFormInput from './AuthRegisterDetailsFormInput.vue';
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
}
.auth-register-details-ctn-mini-ctn{
}
</style>