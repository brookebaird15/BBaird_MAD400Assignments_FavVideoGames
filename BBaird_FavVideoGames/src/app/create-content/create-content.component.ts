import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';



@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newVideoGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  failMessage?: string;
  newGame?: Content;
  submitted = false;
  temp = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {this.submitted = true;}
  addVideoGame(id: string, title: string, description: string, creator: string, imageUrl?: string, type?: string, tags?: string ): void{
    if (type == ''){
      type = undefined;
    }

    let tagsArray = tags?.split(", ")
    if(tagsArray){
      if(tagsArray[0] == ''){
        tagsArray = undefined;
      }
    }

  
    this.newGame = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imageUrl,
      type: type,
      tags: tagsArray
    };

    if (id == "" || title == "" || description == "" || creator == "") {
      this.newGame = undefined;
    }
    let promise = new Promise((success, fail) => {
      if(this.newGame) {
        success(`${this.newGame.title} was successfully added`)
        this.failMessage = undefined
        this.newVideoGameEvent.emit(this.newGame)
      } else {
        fail("Could not add the game to the list.")
      }
    })
    promise.then(success => console.log(success)).catch(fail => this.failMessage = fail)
  }
}
