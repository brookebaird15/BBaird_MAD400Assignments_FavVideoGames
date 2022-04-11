import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface'
import { GameService } from '../services/game.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  @Input() game?: Content
  id?: number;

  constructor(private route: ActivatedRoute, private gameService: GameService, private messageService: MessageService) { }

  ngOnInit(): void {
    //grab a piece of content by passing an id 
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id') ?? "0");
      this.gameService.getGame(this.id).subscribe((c)=> {
        this.game = c;
      });
    });
  }

}
