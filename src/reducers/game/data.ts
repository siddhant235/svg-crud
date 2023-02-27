import { Game } from "../../interfaces/games.interface";

 export const games:Game[]=[
    {
            id:1,
            name: "Bottle Flip",
            url: "https://simpleiralgames.com",
            author: "Simple Viral Games",
            published_date: new Date("2022-08-01 00:00:00")
    }
    
]

export const initialGameState={
    games:games
}