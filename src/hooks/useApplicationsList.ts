import {useAppSelector} from "./hooks.ts";
import {StateSchema} from "../store/StateSchema.ts";

export const useApplicationsList = () => {
    const list = useAppSelector(state => state.applicationList.list);

    return list
}

// export const useApplicationsList = (state: StateSchema) => state.applicationList.list
