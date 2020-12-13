<template>
    <div>
        <div id="elapsed-seconds">Elapsed seconds: {{ elapsedSeconds }}</div>
        <div id="game-box">
            <GameElement v-for="(gameElement, index) in game.gameElements" v-bind:key="index"
                         v-on:clicked="onClickGameElement"
                         v-bind:game-element-model="gameElement"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Watch } from 'vue-property-decorator';
    import GameElement from '@/components/GameElement.vue';
    import GameModel from '@/models/GameModel';
    import GameElementModel from '@/models/GameElementModel';

    @Component({
        components: {
            GameElement,
        },
    })
    export default class Game extends Vue {
        private game: GameModel;
        private intervalId: number = 0;
        private elapsedSeconds: number = 0;
        private readonly imageUrls: Array<string> = [
            'https://media.jfrog.com/wp-content/uploads/2020/06/16143409/frog-pro-oss-new.png',
            'https://media.jfrog.com/wp-content/uploads/2020/08/16153326/open-source-hipster-frog-1.png',
            'https://media.jfrog.com/wp-content/uploads/2019/12/20130011/frog-community.png',
            'https://sc02.alicdn.com/kf/HLB1.Uw8RG6qK1RjSZFmq6x0PFXat/Squishy-toys-Frog-shape-stress-release-ball.jpg',
            'https://media.jfrog.com/wp-content/uploads/2020/07/07101721/frog-bintray-animation.gif',
            'https://media.jfrog.com/wp-content/uploads/sites/3/2017/10/20115234/green_logo.png',
            'https://join.jfrog.com/wp-content/themes/join.jfrog.com/assets/images/cursor.png',
            'https://pbs.twimg.com/media/EaQwqvfXgAEVUb3.jpg'
        ];

        constructor() {
            super();
            this.imageUrls = [...this.imageUrls, ...this.imageUrls];
            this.imageUrls = this.imageUrls.sort(() => Math.random() - 0.5);
            this.game = new GameModel(this.imageUrls);
        }

        created() {
            this.intervalId = setInterval(() => {
                this.elapsedSeconds += 1;
            }, 1000);
        }

        @Watch('game', {
            immediate: true, deep: true
        })
        projectChanged(newGame: GameModel) {
            if (newGame.isOver) {
                clearInterval(this.intervalId);
            }
        }

        onClickGameElement(gameElementModel: GameElementModel) {
            this.game.selectElement(gameElementModel.id);
        }
    }
</script>

<style scoped>
    #game-box {
        margin: 0 auto;
        width: 70vmin;
        height: 70vmin;
        background: #2f2f2f;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 0.25vmin;
    }

    #elapsed-seconds {
        text-align: center;
        font-size: 20px;
    }
</style>
