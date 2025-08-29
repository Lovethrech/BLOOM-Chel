<script setup>
import { defineProps } from 'vue';

const {description}=defineProps(['description']);
</script>

<template>
    <div class="home-attribute-box-desc-main-ctn">
        <p class="home-attribute-box-desc-main-ctn-name">
            {{description}}
        </p>
    </div>
</template>