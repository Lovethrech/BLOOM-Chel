<script setup>
import FooterLinkIcons from "@/data/footer-link-icons.json"
import FooterLinkIcon from './FooterLinkIcon.vue';
</script>

<template>
    <div class="footer-link-icon-ctn-main-ctn">
        <div class="footer-link-icon-ctn-mini-ctn">
            <FooterLinkIcon
                v-for="FooterLinkIcon in FooterLinkIcons"
                :key="FooterLinkIcon.id"
                :name="FooterLinkIcon.name"
            >
            </FooterLinkIcon>
        </div>
    </div>
</template>

<style scoped>
.footer-link-icon-ctn-main-ctn{
    width: 100%;
    display:flex;
    justify-content: center;
    place-items: center;
}
.footer-link-icon-ctn-mini-ctn{
    display:flex;
    flex-direction: row;
    gap:1vw;
}
</style>