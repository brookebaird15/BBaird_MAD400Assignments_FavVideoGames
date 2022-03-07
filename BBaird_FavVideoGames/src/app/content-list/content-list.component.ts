import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface'

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
  

  public gamesList: Content[] = [
    { id: 0, 
      title: "Minecraft", 
      description: "A sandbox game", 
      creator: "Mojang",   
      imgURL: 'https://cdn.vox-cdn.com/thumbor/S839CxWdImxceD10irj4kxruwVc=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/assets/1142867/Minecraft-360.jpg',
      type: "Sandbox",
      tags: ["Sandbox", "Survival"]},
    {  id: 1,
      title: 'Stardew Valley',
      description: 'A farming simulator that is also a dating/visual novel simulator',
      creator: 'Concerned Ape',
      imgURL: 'https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_US/games/switch/s/stardew-valley-switch/hero?v=2021120220 ',
      type: 'Simulator',
      tags: ["Simulation", "Survival"]},
    {  id: 2,
      title: 'Cities: Skylines',
      description: 'A city-building simulator that focuses on urban-planning, public transport and planning roads',
      creator: 'Colossal Order',
      imgURL: 'https://image.api.playstation.com/cdn/UP4139/CUSA06548_00/dMHT9bxaA6OCQ1e9lu0xP2uIU9dxZSFt.png',
      type: 'Simulator',
      tags: ["Simulation", "City-Builder"]
    },
    {  id: 3,
      title: 'The Sims 4',
      description: 'A social-simulator game where one can experience life, build a home and become rich',
      creator: 'Maxis',
      imgURL: '',
      type: 'Simulator',
      tags: ["Simulation", "Casual"]
    },
    {  id: 4,
      title: 'Calico',
      description: 'An open-world simulator that focuses on re-building a cat cafe',
      creator: 'Peachy Keen Games',
      imgURL: 'https://images.nintendolife.com/4f0c2abcccd03/calico-cover.cover_large.jpg',
      type: 'Open-World',
      tags: ["Open-World", "Indie"]
    },
    {  id: 5,
      title: 'Civilization V',
      description: 'A turn-based strategy game where players can play as a different civilization or nation',
      creator: 'Firaxis Games',
      imgURL: '',
      type: 'Turn-Based Strategy',
      tags: ["Strategy", "Turn-Based"]
    },
    {id: 6,
      title: 'Slime Rancher',
      description: 'You wrangle slimes and go adventuring',
      creator: 'Monomi Park',
      imgURL: 'https://image.api.playstation.com/vulcan/img/cfn/11307NUlRPcxCgzizu6gpFZiR_WIqYHV9W0G8obBn0J1qCXY-SjbkzKihVNA3WzUQHbD08zWVaN-a7U5--t57lc-gckkQ0f-.png',
      type: 'Adventure',
      tags: ["First-Person", "Adventure"]
    },
    {id: 7,
      title: 'VA-11-Hall-A: A Cyberpunk Bartender Action',
      description: 'An indie visual novel where you are a bartender',
      creator: 'Sukeban Games',
      imgURL: 'https://cdn.akamai.steamstatic.com/steam/apps/447530/capsule_616x353.jpg?t=1568782899',
      tags: ["Visual Novel", "Cyberpunk"]}
    ]
  constructor() { }

  ngOnInit(): void {
  }

  searchForTitle(){
    this.isFound = this.gamesList.findIndex((game: Content) => game.title.toLowerCase() === this.searchGame.toLowerCase()) > -1 ? true: false;
    this.buttonClick = true;
    this.selectedSearchGame = this.searchGame;
  }
  //add game to the array
  public addVideoGameToGameList(newVideoGame: Content): void {
    this.gamesList.push(newVideoGame);

    this.gamesList = [...this.gamesList];
    console.log(this.gamesList)
  }

}
