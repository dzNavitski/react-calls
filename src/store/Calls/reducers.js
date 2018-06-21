import {handleActions} from "redux-actions";
import {reject} from "lodash";
import {actions} from './actions';

const defaultSorter = {columnKey: 'name', field: 'name', order: 'ascend'};

export const initialState = {
    entities: [],
    ids: [],
    selected: [],
    status: 'all',
    sorter: defaultSorter
};

export const callsReducer = handleActions(
    new Map([
        [
            actions.calls.add,
            (state, action) => {
                const {call} = action.payload;
                return {
                    ...state,
                    entities: [
                        ...state.entities,
                        call
                    ],
                    ids: [...state.ids, call.id]
                };
            }
        ],
        [
            actions.calls.delete,
            (state, action) => ({
                ...state,
                entities: reject(state.entities, ['id', action.payload.id])
            })
        ],
        [
            actions.calls.sort,
            (state, action) => {
                const {sorter} = action.payload;

                return sorter.columnKey ? {...state, sorter: sorter} : {...state, sorter: {...defaultSorter}};
            }
        ],
        [
            actions.calls.changeStatus,
            (state, action) => {
                const {status} = action.payload;
                return {...state, status};
            }
        ]
    ]),
    {...initialState}
);
