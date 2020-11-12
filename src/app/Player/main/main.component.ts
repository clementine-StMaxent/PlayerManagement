import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'player-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  players: Player[];

  private _PlayerName: string = "";


  constructor(private playerService: PlayerService) { }


  ngOnInit(): void {
    this.playerService.getPlayersAjax()
      .subscribe((players: Player[]) => {
        this.players = players;
      })
  }
  save() {
    // requête ajax
    let player: Player = {
      firstname: this._PlayerName,
      lastname: this._PlayerName,
      teamid: 0,
      position: this._PlayerName,
      age: 0
    }
    this.playerService.postPlayers(player)
      .subscribe((player: Player) => {
        this.players.push(player);
      });
  }

  delete(id) {
    // return this.playerService.delete(`http://localhost:3000/players/${id}`).subscribe(()=>{
    //   let deletePlayer = this.deletePlayer.open('supp',, {
    //     duration:2000,
    //   });
    //   window.location.reload();
    // })
    let player = `http://localhost:3000/players/${id}`;
    console.log(player);
  }

}
