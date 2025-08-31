<script setup>
import NavLogo from '../nav/NavLogo.vue';
</script>

<template>
    <div class="auth-header-main-ctn">
        <div class="auth-header-mini-ctn">
            <header class="auth-header-mini-ctn-header">
                <NavLogo></NavLogo>
            </header>
        </div>
    </div>
</template>

<style scoped>
.auth-header-main-ctn{
    width:100%;
    height: 50vh;
    background: linear-gradient(to bottom, #A54dea, #594edc);
}
.auth-header-mini-ctn{
    width:100%;
    height:50vh;
    background:  url(@/assets/auth-pattern.svg) bottom/ 100% no-repeat;
}

.auth-header-mini-ctn-header{
    padding: 3vh 4vw;
}
</style>