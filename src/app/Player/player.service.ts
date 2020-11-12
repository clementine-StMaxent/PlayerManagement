import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from './player';

const API = "http://localhost:3000/players";

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    private players: string[] = ["viodsoods", "fdsdsbd"];

    constructor(private http: HttpClient) { }

    getPlayers(): string[] {
        return this.players;
    }

    getPlayersAjax() {
        return this.http.get(API);
    }

    postPlayers(player: Player) {
        return this.http.post(API, player);
    }

    deletePlayers() {
        return this.http.delete(API);
    }

}


