import { adminUser } from "../../helpers/data"
import { isUserLoggedIn } from "../../helpers/consts"
import { ActionTypes } from "../../helpers/enums"

export const loginReducer = (state: unknown, action: { type: any, data: any }) => {
    const actionType: unknown = action.type
    const data: any = action.data

  if(actionType==ActionTypes.LOGIN){
  
        if (data.username ==adminUser.username && data.password ==adminUser.password) {
            localStorage.setItem(isUserLoggedIn, "true")
        }
    
  }

}