import { ActionTypes } from "../../helpers/enums";
import { Game } from "../../interfaces/games.interface";





export const gameReducer = (state: any, action: { type: ActionTypes, data: any }) => {

    const actionType = action.type
    const games = state.games

    const gameData: Game = action.data.gameData
    const existingGameIndex: number = state.games.findIndex((game: Game) => game.id == gameData.id)


    if (actionType == ActionTypes.GET_ALL_GAMES) {
        console.log("returning all games",games)
        return games;

    } else if (actionType == ActionTypes.GET_GAME) {

        if (existingGameIndex > -1) {
            console.log(" Game",games[existingGameIndex])
            return games[existingGameIndex]
        }
    }
    else if (actionType == ActionTypes.CREATE_GAME) {

        const newGame: Game = {

            id: games.length+1,
            name: gameData.name,
            url: gameData.url,
            author: gameData.author,
            published_date: gameData.published_date
        }
        const newData=[newGame,...games]


        return {
            ...state,
            games:newData
        }
 

    } else if (actionType == ActionTypes.UPDATE_GAME) {

        if (existingGameIndex > -1) {
            const newData=games
            newData[existingGameIndex] = {
                ...gameData
            }
         console.log("datas",newData,gameData)
        return {
            ...state,
            games:newData
        }
   
        }

    } else if (actionType == ActionTypes.DELETE_GAME) {


        if (existingGameIndex > -1) {
            console.log("new game data1",existingGameIndex)
            const newGameData = games.filter((game: Game) => game.id !== gameData.id)

            return {
                ...state,
                games: newGameData
            }
        }
    
        console.log("game deleted")

    }
}