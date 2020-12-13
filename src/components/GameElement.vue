<template>
    <div class="game-element" v-on:click="select()"
         v-bind:class="{ selected: gameElementModel.selected, found: gameElementModel.found }">
        <div class="game-element-front"></div>
        <div class="game-element-back"
             v-bind:style="{'background-image': 'url(' + gameElementModel.imageUrl +')'}"></div>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import GameElementModel from '@/models/GameElementModel';

    @Component
    export default class GameElement extends Vue {
        @Prop({required: true, type: GameElementModel}) gameElementModel!: GameElementModel;

        select() {
            this.$emit('clicked', this.gameElementModel)
        }
    }
</script>

<style scoped>

    .game-element {
        margin: 0 auto;
        width: 24%;
        height: 24%;
        background: #40be46;
        transition: 0.8s all;
        transform-style: preserve-3d;
    }

    .game-element-front, .game-element-back {
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
    }

    .game-element-back {
        background: white no-repeat;
        background-size: contain;
        height: 100%;
        transform: rotateY(180deg);
    }

    .game-element.selected {
        background: transparent;
        transform: rotateY(180deg);
    }

    .game-element.found {
        background: #7a73ae;
    }
</style>
