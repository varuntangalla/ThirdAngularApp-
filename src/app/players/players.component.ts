import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  
    let response= this.http.get("https://demo4690221.mockable.io/getPlayersHistory");
    response.subscribe((data)=>this.players=data);
  }

}
