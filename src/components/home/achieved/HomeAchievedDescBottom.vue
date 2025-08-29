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
    gap:4vw;
}
.home-achieved-desc-bottom-mini-ctn-name-patients, .home-achieved-desc-bottom-mini-ctn-name-business{
    color:#fff;
    font-size: 2vh;
}
.home-achieved-desc-bottom-mini-ctn-name-patients-count, .home-achieved-desc-bottom-mini-ctn-name-business-count{
    font-size:16vw;
}

@media screen and (min-width:1500px) {
    .home-achieved-desc-bottom-mini-ctn-name-patients, .home-achieved-desc-bottom-mini-ctn-name-business{
        font-size: 2vh;
    }
    .home-achieved-desc-bottom-mini-ctn-name-patients-count, .home-achieved-desc-bottom-mini-ctn-name-business-count{
        font-size:16vh;
    }
}

@media screen and (max-width:850px) {
    .home-achieved-desc-bottom-main-ctn{
        justify-content: left;
    }
    .home-achieved-desc-bottom-mini-ctn{
        flex-direction: column;
    }
    .home-achieved-desc-bottom-mini-ctn-name-patients, .home-achieved-desc-bottom-mini-ctn-name-business{
        font-size: 30px;
    }
    .home-achieved-desc-bottom-mini-ctn-name-patients-count, .home-achieved-desc-bottom-mini-ctn-name-business-count{
        font-size:180px;
    }
}
</style>