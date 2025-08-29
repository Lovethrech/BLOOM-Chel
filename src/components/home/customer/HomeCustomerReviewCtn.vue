<script setup>
import HomeCustomerReviewImg from './HomeCustomerReviewImg.vue';
import HomeCustomerReviewTextCtnDetails from './HomeCustomerReviewTextCtnDetails.vue';
</script>

<template>
    <div class="home-customer-review-ctn-main-ctn">
        <div class="home-customer-review-ctn-mini-ctn">
            <HomeCustomerReviewImg></HomeCustomerReviewImg>
            <HomeCustomerReviewTextCtnDetails></HomeCustomerReviewTextCtnDetails>
        </div>
    </div>
</template>

<style scoped>
.home-customer-review-ctn-main-ctn{
    width: 100%;
    height:100%;
    background: linear-gradient(to bottom, #A54dea, #594edc);
    padding: 0 6vw;
}
.home-customer-review-ctn-mini-ctn{
    width: 1005;
    display:flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    gap:3vw;
    background-color: red;
}
</style>