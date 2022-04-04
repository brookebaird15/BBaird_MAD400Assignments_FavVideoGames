import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-make-dialogue',
  templateUrl: './make-dialogue.component.html',
  styleUrls: ['./make-dialogue.component.scss']
})
export class MakeDialogueComponent implements OnInit {
  newContent?: Content;

  constructor(public matDialogRef: MatDialogRef<MakeDialogueComponent>) {}

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
    this.matDialogRef.close(this.newContent);
  }
}
