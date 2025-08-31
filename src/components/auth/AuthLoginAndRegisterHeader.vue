<script setup>
import AuthLoginAndRegisterHeaderTitle from './AuthLoginAndRegisterHeaderTitle.vue';
import AuthLoginAndRegisterHeaderDesc from './AuthLoginAndRegisterHeaderDesc.vue';
import AuthRegisterDetailsGoogle from './AuthRegisterDetailsGoogle.vue';
</script>

<template>
    <div class="auth-login-and-register-header-main-ctn">
        <div class="auth-login-and-register-header-mini-ctn">
            <AuthLoginAndRegisterHeaderTitle></AuthLoginAndRegisterHeaderTitle>
            <AuthLoginAndRegisterHeaderDesc></AuthLoginAndRegisterHeaderDesc>
            <AuthRegisterDetailsGoogle></AuthRegisterDetailsGoogle>
        </div>
    </div>
</template>

<style scoped>
.auth-login-and-register-header-mini-ctn{
    display:flex;
    flex-direction: column;
    
}
</style>