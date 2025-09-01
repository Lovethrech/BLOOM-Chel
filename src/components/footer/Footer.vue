<script setup>
import FooterLogo from './FooterLogo.vue';
import FooterDesc from './FooterDesc.vue';
import FooterLinkMail from './FooterLinkMail.vue';
import FooterLinkIconCtn from './FooterLinkIconCtn.vue';
import FooterRight from './FooterRight.vue';
</script>

<template>
    <footer class="footer-main-ctn">
        <div class="footer-mini-ctn">
            <FooterLogo></FooterLogo>
            <FooterDesc></FooterDesc>
            <br/>
            <FooterLinkMail></FooterLinkMail>
            <br/>
            <FooterLinkIconCtn></FooterLinkIconCtn>
            <FooterRight></FooterRight>
        </div>
    </footer>
</template>

<style scoped>
.footer-main-ctn{
    background: linear-gradient(to bottom, #A54dea, #594edc);
    width: 100%;
    height:50vh;
    padding: 10vh 6vw 0;
}
</style>