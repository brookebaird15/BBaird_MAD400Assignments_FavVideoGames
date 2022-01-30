import { Content } from "./content-interface";

export class ContentList {
    private _contentInterface : Content[];

    constructor() {
        this._contentInterface = [];
    }

    get contentInterface() : Content[]{
        return this._contentInterface;
    }

    addItems(contentInterface: Content) {
        this._contentInterface.push(contentInterface);
    }

    numberOfItems(){
        return this._contentInterface.length;
    }

    getItems(index: number){
       let itemAtIndex = this.contentInterface[index];
        if (index > this.numberOfItems() || index < 0){
            return `<strong>Oh no! The array is out of bounds</strong>`
        }
        return `<p>Title: ${itemAtIndex.title} 
        Description: ${itemAtIndex.description} 
        Creator: ${itemAtIndex.creator} 
        Image: <img src="${itemAtIndex.imgURL}"> 
        Type: ${itemAtIndex.type} </p>`
    }
}