<script setup>
import { defineProps } from 'vue';

const {name, placeholder, nameFor, nameType, vModel}=defineProps(['name', 'placeholder', 'nameFor', 'nameType', 'vModel']);
</script>

<template>
    <div class="auth-register-details-form-input-main-ctn">
        <div class="auth-register-details-form-input-mini-ctn">
            <label :for="nameFor" class="auth-register-details-form-input-mini-ctn-label">
                {{ name }}
            </label>
            <input :v-model="vModel" :id="nameFor" :type="nameType" :placeholder="placeholder" class="auth-register-details-form-input-mini-ctn-input">
        </div>
    </div>
</template>

<style scoped>
.auth-register-details-form-input-mini-ctn{
    display: flex;
    flex-direction: column;
}
.auth-register-details-form-input-mini-ctn-label{
    text-transform: capitalize;
}
.auth-register-details-form-input-mini-ctn-input{
    background-color: #e7e4e4;
    padding:1.3vh 1vw;
    border:0;
}
</style>