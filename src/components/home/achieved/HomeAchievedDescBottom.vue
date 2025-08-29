<template>
    <div class="home-achieved-desc-bottom-main-ctn">
        <div class="home-achieved-desc-bottom-mini-ctn">
            <p class="home-achieved-desc-bottom-mini-ctn-name-patients">
                <b class="home-achieved-desc-bottom-mini-ctn-name-patients-count">
                    40k+
                </b>
                <br/>
                patients reached
            </p>
            <p class="home-achieved-desc-bottom-mini-ctn-name-business">
                <b class="home-achieved-desc-bottom-mini-ctn-name-patients-count">
                    10+
                </b>
                <br/>
                business reached
            </p>
        </div>
    </div>
</template>

<style scoped>
.home-achieved-desc-bottom-main-ctn{
    display:flex;
    justify-content: end;
}
.home-achieved-desc-bottom-mini-ctn{
    display:flex;
    flex-direction: row;
    gap:2vw;
}
.home-achieved-desc-bottom-mini-ctn-name-patients, .home-achieved-desc-bottom-mini-ctn-name-business{
    color:#fff;
    font-size: 1vw;
}
.home-achieved-desc-bottom-mini-ctn-name-patients-count, .home-achieved-desc-bottom-mini-ctn-name-business-count{
    font-size:5vw;
}
</style>