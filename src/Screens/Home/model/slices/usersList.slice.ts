import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserProfile} from "../../../../types/userTypes.ts";
import {usersApi} from "../../../../services/usersApi.ts";
import {IUserProfilePayload} from "../../types/usersList.type.ts";

interface IUsersListStateSchema {
    [key: string]: IUserProfile
}

const initialState: IUsersListStateSchema = {};

export const usersListSlice = createSlice({
    name: 'usersList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            usersApi.endpoints.getProfile.matchFulfilled,
            (state, {payload}: PayloadAction<IUserProfilePayload>) => {
                const {email, first_name, middle_name, second_name} = payload.response;
                state[email as string] = {first_name, middle_name, second_name};
            }
        )
    }
});

export const {actions, reducer} = usersListSlice;
