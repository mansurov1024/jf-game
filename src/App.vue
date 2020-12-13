<template>
    <div id="app">
        <div id="header"></div>
        <Game/>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Game from '@/components/Game.vue';

    @Component({
        components: {
            Game,
        },
    })
    export default class App extends Vue {
    }
</script>

<style>
    #app {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        height: 100vh;
    }

    #header {
        background-image: url(assets/green_logo.png);
        background-size: 100%;
        height: 65px;
        width: 70px;
    }
</style>
