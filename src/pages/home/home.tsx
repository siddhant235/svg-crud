import React, { useReducer, useState } from "react";
import CreateGame from "../../components/create-game";
import GameList from "../../components/games-list";
import { initialGameState } from "../../reducers/game/data";
import { gameReducer } from "../../reducers/game/game";
import Button from "../../shared/ui/button/button";


const Home=()=>{
    const [state, dispatch] = useReducer(gameReducer, initialGameState)
    const [showCreate,setShowCreate]=useState<boolean>(false)
    const handleCreate=()=>{
       setShowCreate(true)
    }

    return (

        <>
        {showCreate?<CreateGame setShowCreate={setShowCreate} dispatch={dispatch}/>:""}
        <div>
            <Button title="Create Game" onClick={handleCreate}/>
        </div>
         <GameList dispatch={dispatch} games={state.games}/>
        </>
    )
}

export default Home;