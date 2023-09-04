import { Action, Selector, State, StateContext } from "@ngxs/store";
import {User} from "src/app/models/user"
import { AddUser } from "../actions/user.actions";
export class UserStateModel
{
users:[User]|any;
}
@State<UserStateModel>
(
    {
        name:'users',
        defaults:
        {
            users:[]
        }

})

export class UserState
{
    @Selector()
    static getuser(state:UserStateModel)
    {
        return state.users
    }
    @Action(AddUser)
    add({getState,patchState}:StateContext<UserStateModel>,{payload}:AddUser)
    {
        const state=getState();
        patchState({
            users:[...state.users,payload]
        });

    }
    

}