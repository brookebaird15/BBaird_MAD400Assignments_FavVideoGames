import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { MakeDialogueComponent } from '../make-dialogue/make-dialogue.component';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {
  @Output() newGameEvent = new EventEmitter<Content>();
  newContent?: Content;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
    
  addGame(): void{
    let dialogueRef = this.dialog.open(MakeDialogueComponent, {
      height: '500px',
      width: '400px'
    })

    dialogueRef.afterClosed().subscribe(resultsPassed =>  {
      if (resultsPassed){
      this.newGameEvent.emit(resultsPassed)
    }
  }
    )
  
  }

}
