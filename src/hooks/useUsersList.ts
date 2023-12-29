import {useAppSelector} from "./hooks.ts";

export const useUsersList = () => {
    return useAppSelector(state => state.usersList);
};
