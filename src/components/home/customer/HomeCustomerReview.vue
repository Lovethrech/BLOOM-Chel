<script setup>
import HomeCustomerReviewCtn from './HomeCustomerReviewCtn.vue';
</script>


<template>
    <section class="home-customer-review-main-ctn">
        <div class="home-customer-review-mini-ctn">
            <p class="home-customer-review-mini-ctn-name">
                customer reviews
            </p>
            <HomeCustomerReviewCtn></HomeCustomerReviewCtn>
        </div>
    </section>
</template>

<style scoped>
.home-customer-review-main-ctn{
    width:100%;
    min-height:100vh;
    padding: 10vh 0;
}
.home-customer-review-mini-ctn{
    width:100%;
}
.home-customer-review-mini-ctn-name{
    text-transform: uppercase;
    font-size: 3.6vh;
    margin: 0 6vw;
}
</style>