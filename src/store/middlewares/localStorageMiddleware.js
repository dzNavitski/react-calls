export const localStorageMiddleware = ({getState}) => {
    return (next) => (action) => {
        const result = next(action);

        try {
            localStorage.setItem('applicationState', JSON.stringify(getState()));
        } catch (e) {}

        return result;
    };
};

export const reHydrateStore = () => {
    try {
        const state = localStorage.getItem('applicationState');

        if (state === null) {
            return undefined;
        }

        return JSON.parse(localStorage.getItem('applicationState'));
    } catch (e) {
        return undefined;
    }
    
};