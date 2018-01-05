import { Actions } from '../actions/index';

export interface CopyrightsState {
    transfer: boolean;
    allowDerivativeWorks: boolean;
    license: {
        homepage: string;
        expiry?: Date;
    };
}

const init = (): CopyrightsState => ({
    transfer: false,
    allowDerivativeWorks: false,
    license: {
        homepage: ''
    }
});

export const copyRightsReducer = (state: CopyrightsState = init(), action: Actions): CopyrightsState => {
    switch (action.type) {
        case 'SET_COPYRIGHTS_TRANSFER':
            return Object.assign(
                {},
                state,
                {
                    transfer: action.payload.value,
                    allowDerivativeWorks: action.payload.value
                        ? state.allowDerivativeWorks
                        : false
                });
        case 'SET_COPYRIGHTS_ALLOW_DERIVATIVE_WORKS':
            return Object.assign(
                {},
                state,
                {
                    transfer: action.payload.value
                        ? true
                        : state.transfer,
                    allowDerivativeWorks: action.payload.value
                });
        case 'CHANGE_COPYRIGHTS_LICENSE_HOMEPAGE_NAME':
            return Object.assign(
                {},
                state,
                {
                    license: {
                        ...state.license,
                        homepage: action.payload.changedName
                    }});
        case 'CHANGE_COPYRIGHTS_LICENSE_EXPIRY_DATE':
            return Object.assign(
                {},
                state,
                {
                    license: {
                        ...state.license,
                        expiry: action.payload.changed
                    }
                });
        default:
            return state;
    }
};
