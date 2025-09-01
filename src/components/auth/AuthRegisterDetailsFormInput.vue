<script setup>
import { defineProps } from 'vue';

const {name, placeholder, nameFor, nameType, vModel, inputBoxBorder}=defineProps(['name', 'placeholder', 'nameFor', 'nameType', 'vModel', 'inputBoxBorder']);
</script>

<template>
    <div class="auth-register-details-form-input-main-ctn">
        <div class="auth-register-details-form-input-mini-ctn">
            <label :for="nameFor" class="auth-register-details-form-input-mini-ctn-label">
                {{ name }}
            </label>
            <input :v-model="vModel" :id="nameFor" :type="nameType" :placeholder="placeholder" :style="{border:inputBoxBorder}" class="auth-register-details-form-input-mini-ctn-input">
        </div>
    </div>
</template>

<style scoped>
.auth-register-details-form-input-mini-ctn{
    display: flex;
    flex-direction: column;
    font-weight:400;
    font-size: 1.2vh;
}
.auth-register-details-form-input-mini-ctn-label{
    color: #838383;
    text-transform: capitalize;
}
.auth-register-details-form-input-mini-ctn-input{
    background-color: #f7f7f7;
    padding:1.3vh 0.002vh 1.3vh 1.1vh;
    border-radius: 1.2vh;
}   
</style>