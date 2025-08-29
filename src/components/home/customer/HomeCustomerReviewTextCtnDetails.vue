<script setup>
import HomeCustomerReviewTextCtnDetailsName from './HomeCustomerReviewTextCtnDetailsName.vue';
import HomeCustomerReviewTextCtnDetailsTitle from './HomeCustomerReviewTextCtnDetailsTitle.vue';
import HomeCustomerReviewTextCtnDetailsYear from './HomeCustomerReviewTextCtnDetailsYear.vue';
import HomeCustomerReviewTextCtnSpeech from './HomeCustomerReviewTextCtnSpeech.vue';
</script>

<template>
    <div class="home-customer-review-text-ctn-details-main-ctn">
        <div class="home-customer-review-text-ctn-details-mini-ctn">
            <HomeCustomerReviewTextCtnSpeech></HomeCustomerReviewTextCtnSpeech>
            <div class="home-customer-review-personal-details">
                <HomeCustomerReviewTextCtnDetailsTitle></HomeCustomerReviewTextCtnDetailsTitle>
                <HomeCustomerReviewTextCtnDetailsName></HomeCustomerReviewTextCtnDetailsName>
                <HomeCustomerReviewTextCtnDetailsYear></HomeCustomerReviewTextCtnDetailsYear>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-customer-review-text-ctn-details-main-ctn{
    padding: 10vh 0;
    width:40%;
}
.home-customer-review-text-ctn-details-mini-ctn{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height:100%;
}

@media screen and (max-width: 900px) {
    .home-customer-review-text-ctn-details-main-ctn{
        width:100%;
        padding:0 6vw
    }
}
</style>