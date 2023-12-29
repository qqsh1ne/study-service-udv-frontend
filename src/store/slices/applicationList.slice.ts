import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IApplicationList, IApplicationListResponseItem} from "../../screens/Home/types/ApplicationList.types.ts";
import {applicationApi} from "../../services/applicationApi.ts";

interface IApplicationListSchema {
    list: IApplicationListResponseItem[]
}

const initialState: IApplicationListSchema = {
    list: []
};

export const applicationListSlice = createSlice({
    name: 'applicationList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            applicationApi.endpoints.getApplicationList.matchFulfilled,
            (state, {payload}: PayloadAction<IApplicationList>) => {
                state.list = payload.response;
            }
        )
    }
});

export const { actions, reducer } = applicationListSlice;
