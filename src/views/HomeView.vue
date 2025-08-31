<script setup>
import HomeHero from '@/components/home/hero/HomeHero.vue';
import HomeAbout from '@/components/home/about/HomeAbout.vue';
import HomeContact from '@/components/home/contact/HomeContact.vue';
import HomeAttribute from '@/components/home/attribute/HomeAttribute.vue';
import HomeAchieved from '@/components/home/achieved/HomeAchieved.vue';
import HomeCustomerReview from '@/components/home/customer/HomeCustomerReview.vue';
import HomeBlog from '@/components/home/blog/HomeBlog.vue';
import HomeTeam from '@/components/home/team/HomeTeam.vue';
import HomePartner from '@/components/home/partner/HomePartner.vue';
import Footer from '@/components/footer/Footer.vue';
</script>

<template>
  <header>
    <HomeHero></HomeHero>
  </header>
  <main>
    
    <HomeAbout></HomeAbout>
    <HomeContact></HomeContact>
    <HomeAttribute></HomeAttribute>
    <HomeAchieved></HomeAchieved>
    <HomeCustomerReview></HomeCustomerReview>
    <HomeBlog></HomeBlog>
    <HomeTeam></HomeTeam>
    <HomePartner></HomePartner>
    <Footer></Footer>
  </main>
</template>
