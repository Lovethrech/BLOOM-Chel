import { ref } from "vue";
import { defineStore } from "pinia";

export const useHomeHeroArrowSlideStore= defineStore('homeHeroArrowSlide', ()=>{
    const isOpen=ref(false);

    function toggleContent() {
        isOpen.value = !isOpen.value
    }
    return(isOpen, toggleContent)
});