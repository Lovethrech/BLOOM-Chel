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
}
.auth-register-details-form-input-mini-ctn-label{
    text-transform: capitalize;
    font-size: 1.4vh;
}
.auth-register-details-form-input-mini-ctn-input{
    background-color: #f3f0f0;
    padding:1.3vh 1vw;
    font-size: 1.8vh;
}   
</style>