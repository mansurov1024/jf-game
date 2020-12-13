export default class GameElementModel {
    readonly imageUrl: string;
    readonly id: number;
    selected: boolean;
    found: boolean;

    constructor(id: number, imageUrl: string, selected: boolean = false, found: boolean = false) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.selected = selected;
        this.found = found;
    }

    select() {
        this.selected = true;
    }

    unSelect() {
        this.selected = false;
    }

    setFound() {
        this.found = true;
    }
}
