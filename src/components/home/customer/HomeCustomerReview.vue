<script setup>
import HomeCustomerReviewCtn from './HomeCustomerReviewCtn.vue';
</script>


<template>
    <section class="home-customer-review-main-ctn">
        <div class="home-customer-review-mini-ctn">
            <h4 class="home-customer-review-mini-ctn-name">
                customer reviews
            </h4>
            <HomeCustomerReviewCtn></HomeCustomerReviewCtn>
        </div>
    </section>
</template>

<style scoped>
.home-customer-review-main-ctn{
    width:100%;
    min-height:50vh;
    padding: 16vh 0;
}
.home-customer-review-mini-ctn{
    width:100%;
}
.home-customer-review-mini-ctn-name{
    text-transform: uppercase;
    font-size: 3vw;
    margin: 0 6vw;
}

@media screen and (max-width: 900px) {
    .home-customer-review-mini-ctn-name{
        font-size: 30px;
    }
}
</style>