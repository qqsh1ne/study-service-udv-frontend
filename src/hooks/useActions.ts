import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";

import {actions as applicationListActions} from "../store/slices/applicationList.slice.ts";

const rootActions = {
    ...applicationListActions
}

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
