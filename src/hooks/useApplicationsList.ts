import {useAppSelector} from "./hooks.ts";

export const useApplicationsList = () => {
    const list = useAppSelector(state => state.applicationList.list);

    return list
}
