import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() newGameEvent = new EventEmitter<Content>();
  newContent?: Content;


  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }
    
  addGame(title: string, description: string, creator: string, imgURL?: string, type?: string, tags?: string): void{
    if (type == ''){
      type = undefined
    }
    let tagsArray = tags?.split(", ")
    if(tagsArray){
      for(let i = 0; i < tagsArray.length; i++){
        if(tagsArray[i] == ""){
          tagsArray.splice(i, 1)
        }
      }
    }
    this.newContent = {
      title: title,
      description: description,
      creator: creator,
      imgURL: imgURL,
      type: type?.toLowerCase(),
      tags: tagsArray
    }
    if(title == "" || description == "" || creator ==""){
      this.newContent = undefined
      console.log("Could not add the item")
    }
    if(this.newContent){
      this.newGameEvent.emit(this.newContent)
    }
  }

}
