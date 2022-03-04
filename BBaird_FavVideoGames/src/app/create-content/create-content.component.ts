import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';



@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newVideoGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame?: Content;
  submitted = false;
  temp = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {this.submitted = true;}
  addVideoGame(id: string, title: string, description: string, creator: string, imageUrl: string, tags: string ): void{

  }
}
