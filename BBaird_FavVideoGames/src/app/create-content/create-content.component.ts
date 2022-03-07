import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';



@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newVideoGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame: Content = {} as Content;
  submitted = false;
  temp = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {this.submitted = true;}
  addVideoGame(id: string, title: string, description: string, creator: string, imageUrl: string, tags: string ): void{
    this.newGame = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imageUrl,
      tags: tags.split(", ")
    };
    // console.log(this.addVideoGame)
    this.newVideoGameEvent.emit(this.newGame)

  }
}
