<script setup>
import { defineProps } from 'vue';

const {tryFreeBtnBgColor, tryFreeBtnColor}=defineProps(['tryFreeBtnBgColor', 'tryFreeBtnColor'])
</script>

<template>
    <div class="try-for-free-btn-main-ctn">
        <RouterLink to="/auth">
            <button 
                class="try-for-free-btn" 
                :style="{background:tryFreeBtnBgColor, color:tryFreeBtnColor}"
            >
                Try for free
            </button>
        </RouterLink>
    </div>
</template>