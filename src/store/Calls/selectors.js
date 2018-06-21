import {createSelector} from 'reselect';
import {chain} from 'lodash';
import {checkIfFinished, convertSortOrder, minutesOfDay} from "../../common/utils";

const sortCallsFn = (sorter) => (e) => {
    const v = e[sorter.field];
    if (sorter.field === 'time') {
        return minutesOfDay(v);
    }

    return v;
};

const filterCallsFn = (status) => (e) => {
    const t = e.time;

    switch (status) {
        case 'next':
            return !checkIfFinished(t);
        case 'finished':
            return checkIfFinished(t);
        case 'all':
        default:
            return true;
    }
};

export const callEntitiesSelector = state => state.calls.entities;
export const sorterSelector = state => state.calls.sorter;
export const statusSelector = state => state.calls.status;

export const callEntitiesSortedSelector = createSelector(
    callEntitiesSelector,
    sorterSelector,
    (entities, sorter) => {
        return chain(entities)
            .orderBy(sortCallsFn(sorter), [convertSortOrder(sorter.order)])
            .map(e => ({
                ...e,
                finished: checkIfFinished(e.time)
            }))
            .value();
    }
);

export const callEntitiesFilteredSelector = createSelector(
    callEntitiesSortedSelector,
    statusSelector,
    (entities, status) => {
        return entities.filter(filterCallsFn(status));
    }
);

export const nextCallSelector = createSelector(
    callEntitiesSelector,
    (entities) => {
        return chain(entities)
            .orderBy(entities, ['name'], ['asc'])
            .filter(filterCallsFn('next'))
            .first()
            .value();
    }
);