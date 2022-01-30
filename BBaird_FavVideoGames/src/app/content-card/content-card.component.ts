import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  list: ContentList;
  showContent : string[];
  constructor() {
    this.list = new ContentList;
    this.showContent = [];
    
    
    this.list.addItems({
  id: 0,
  title: 'Minecraft',
  description: 'A sandbox game',
  creator: 'Mojang',
  imgURL: 'https://cdn.vox-cdn.com/thumbor/S839CxWdImxceD10irj4kxruwVc=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/assets/1142867/Minecraft-360.jpg',
  type: 'Sandbox'
});

  this.list.addItems({
  id: 1,
  title: 'Stardew Valley',
  description: 'A farming simulator that is also a dating/visual novel simulator',
  creator: 'Concerned Ape',
  imgURL: 'https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_US/games/switch/s/stardew-valley-switch/hero?v=2021120220 ',
  type: 'Farming Simulator'
});

  this.list.addItems({
  id: 2,
  title: 'Cities: Skylines',
  description: 'A city-building simulator that focuses on urban-planning, public transport and planning roads',
  creator: 'Colossal Order',
  imgURL: 'https://image.api.playstation.com/cdn/UP4139/CUSA06548_00/dMHT9bxaA6OCQ1e9lu0xP2uIU9dxZSFt.png',
  type: 'City-Building Simulator'
});

this.showContent.push(this.list.getItems(0));
this.showContent.push(this.list.getItems(1));
this.showContent.push(this.list.getItems(2));
   }

  ngOnInit(): void {
    
  }

}
