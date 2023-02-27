import React, { useEffect, useReducer, useState } from "react";
import { ActionTypes } from "../../helpers/enums";
import { Game } from "../../interfaces/games.interface";
import { games, initialGameState } from "../../reducers/game/data";
import { gameReducer } from "../../reducers/game/game";
import Card from "../../shared/ui/card/card";
import CreateGame from "../create-game";
import "./games-list.css"
interface GameProps {
    games?: Game[],
    dispatch: any
}
const GameList = (props: GameProps) => {

    const [editGame, setEditGame] = useState(false)
    const [editData, setEditData] = useState()
    const { games, dispatch } = props

    const handleGameEdit = (data: any) => {
        setEditGame(true)
        setEditData(data)


    }

    const handleDelete = (data: any) => {
        console.log("data to delete", data)
        //@ts-ignore
        dispatch({
            type: ActionTypes.DELETE_GAME, data: {
                gameData: data
            }
        })
    }
    if (games && games.length == 0) {
        return <></>
    }
    return (
        <div className="gameslist">
            {editGame ? <CreateGame setShowCreate={setEditGame} dispatch={dispatch} data={editData} /> : ""}
            {games?.map((data: Game, index: number) => {
                return (
                    <div className="gamelist_card" key={data.id}>
                        <Card>
                            <div className="gamelist_card_data">
                                <div className="card_actions">
                                    <p onClick={() => handleGameEdit(data)}>Edit</p>
                                    <p onClick={() => handleDelete(data)}>Delete</p>
                                </div>
                                <div key={data.id} className="card_content">
                                    <p><span>title</span>{data.name}</p>
                                   <p><span>Url </span><a href={data.url}>{data.url}</a></p> 
                                    <p><span>Author </span>{data.author}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                )
            })}
        </div>
    )

}

export default GameList