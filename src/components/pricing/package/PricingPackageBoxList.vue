<script setup>
import { ref,defineProps } from 'vue';

const nameTextDecoration=ref("line-through")
const {mark, markName}=defineProps(['mark', 'markName']);
if (mark.value==="~"){

}
</script>


<template>
    <div class="pricing-package-box-list-main-ctn">
        <div class="pricing-package-box-list-mini-ctn">
            <div class="pricing-package-box-list-mini-ctn-mark-ctn">
                {{ mark }}
            </div>
            <div class="pricing-package-box-list-mini-ctn-mark-name-ctn">
                <p class="pricing-package-box-list-mini-ctn-mark-name">
                    {{markName}}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pricing-package-box-list-mini-ctn{
    display:flex;
    flex-direction: row;
    gap: 0.5vh;
}
.pricing-package-box-list-mini-ctn-mark-name{
    text-decoration: line-through;
}
</style>