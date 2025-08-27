import { ref } from "vue";
import { defineStore } from "pinia";

export const useHomeHeroArrowSlideStore= defineStore('homeHeroArrowSlide', ()=>{
    const defaultScreenSlideHeight=ref("")
    const isOpenActivate=ref(true);

    const isOpen=isOpenDeactivate;

    const toggleContent=()=>{
        if(isOpen.value===isOpenDeactivate){
            isOpen.value=isOpenActivate;
        }
    }
    // function toggleContent() {
    //     isOpen.value = !isOpen.value
    // }
    return(isOpen, toggleContent)
});