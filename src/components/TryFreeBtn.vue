<script setup>
import { defineProps } from 'vue';

const {tryFreeBtnBgColor, tryFreeBtnColor}=defineProps(['tryFreeBtnBgColor', 'tryFreeBtnColor'])
</script>

<template>
    <div class="try-for-free-btn-main-ctn">
        <RouterLink to="">
            <button class="try-for-free-btn" :style="{backgroundColor:tryFreeBtnBgColor, color:tryFreeBtnColor}">
                Try for free
            </button>
        </RouterLink>
    </div>
</template>