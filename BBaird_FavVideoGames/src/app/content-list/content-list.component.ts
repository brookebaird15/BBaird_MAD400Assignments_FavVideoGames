import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface'
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  public searchGame = "";
  public buttonClick = false;
  public isFound = false;
  public selectedSearchGame = "";
  contentList: Content[];
  
  constructor(private gameService: GameService) { 
    this.contentList = [];
  }
  ngOnInit(): void {
    this.getContentFromServer();
  }

  getContentFromServer(): void{
    this.gameService.getContent().subscribe(contentArray => {this.contentList = contentArray});
  }

  addContentToList(newContent: Content){
    this.gameService.addContent(newContent).subscribe(newContentFromServer => {
      this.contentList.push(newContentFromServer)
      this.contentList = [...this.contentList]

    })
  }

  updateContentInList(contentItem: Content): void{
    this.gameService.updateContent(contentItem).subscribe(() =>
    this.getContentFromServer)
  }
  searchForTitle(){
    this.isFound = this.contentList.findIndex((game: Content) => game.title.toLowerCase() === this.searchGame.toLowerCase()) > -1 ? true: false;
    this.buttonClick = true;
    this.selectedSearchGame = this.searchGame;
  }
  //add game to the array
  public addVideoGameToGameList(newVideoGame: Content): void {
    this.contentList.push(newVideoGame);

    this.contentList = [...this.contentList];
    console.log(this.contentList)
  }

}
