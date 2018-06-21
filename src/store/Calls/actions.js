import {createActions} from "redux-actions";

export const actions = createActions({
    CALLS: {
        ADD: call => ({call}),
        DELETE: id => ({id}),
        SORT: (sorter) => ({sorter}),
        CHANGE_STATUS: status => ({status})
    }
});