import {api} from "./api.ts";
import {IUserProfileQuery, IUserProfileRequest} from "../types/userTypes.ts";

export const usersApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProfile: builder.mutation<IUserProfileQuery, IUserProfileRequest>({
            query: (body) => ({
                url: `/api/profile/${body.email}`,
                method: 'POST',
                body: {access_token: body.access_token},
            })
        })
    })
});

export const {useGetProfileMutation} = usersApi;
