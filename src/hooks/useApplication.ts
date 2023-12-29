import {useAppSelector} from "./hooks.ts";

export const useApplication = (id: number) => {
    return useAppSelector(state => state.applicationList.list.find((app) => app.id === id));
};
