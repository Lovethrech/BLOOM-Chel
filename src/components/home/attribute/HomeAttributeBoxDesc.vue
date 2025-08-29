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

<style scoped>
.home-attribute-box-desc-main-ctn-name{
    font-size: 0.8vw;
}

@media screen and (max-width: 850px) {
    .home-attribute-box-desc-main-ctn-name{
        font-size: 10px;
    }
}
</style>