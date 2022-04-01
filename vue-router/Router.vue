<template>
    <div>
        <div>
            <router-link to="/game/number-baseball">숫자야구</router-link>
            <router-link to="/game/response-check">반응속도체크</router-link>
            <router-link to="/game/lotto-gen">로또</router-link>
            <router-link to="/game/rsp-game">가위바위보</router-link>
            <router-link to="/game/index">GameMatcher</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import router from './routers'

export default {
    router,

}
</script>

<style>

</style>