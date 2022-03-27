import { Component } from '@angular/core';
import { GameService } from './services/game.service';
import { Content } from './helper-files/content-interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Favourite Video Games';
  content?: Content;
  verifiedNum: number = -1

  constructor(private gameService: GameService){

  }
  ngOnInit(): void{

  }
  selectItem(id: string){
    let validNum = parseInt(id)
    if(validNum >= 0){
      this.verifiedNum = validNum
      if(this.gameService.checkIndex(this.verifiedNum)){
        this.gameService.getGame(this.verifiedNum).subscribe(content => this.content = content)
      }
    } 
  }

}
