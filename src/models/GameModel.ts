import GameElementModel from '@/models/GameElementModel';

export default class GameModel {
    private blocked: boolean = false;
    gameElements: Array<GameElementModel> = [];
    selectedGameElements: Array<GameElementModel> = [];
    private numberFoundElements: number = 0;
    isOver = false;

    constructor(imageUrls: Array<string>) {
        imageUrls.filter((imageUrl, index) => {
            this.gameElements.push(new GameElementModel(index, imageUrl));
        });
    }

    isBlocked() {
        return this.blocked;
    }

    block() {
        this.blocked = true;
    }

    unBlock() {
        this.blocked = false;
    }

    selectElement(elementId: number) {
        if (this.gameElements[elementId].found || this.gameElements[elementId].selected || this.isBlocked()) {
            return;
        }
        this.gameElements[elementId].select();

        if (this.selectedGameElements.length < 2) {
            this.selectedGameElements.push(this.gameElements[elementId]);
        }

        if (this.selectedGameElements.length === 2) {
            this.block();
            setTimeout(() => {
                this.selectedGameElements[0].selected = false;
                this.selectedGameElements[1].selected = false;
                if (this.selectedGameElements[0].imageUrl === this.selectedGameElements[1].imageUrl) {
                    this.selectedGameElements[0].setFound();
                    this.selectedGameElements[1].setFound();
                    this.numberFoundElements++;
                    if (this.numberFoundElements > 7) {
                        this.isOver = true;
                    }
                }
                this.selectedGameElements = [];
                this.unBlock();
            }, 1000);
        }
    }
}
