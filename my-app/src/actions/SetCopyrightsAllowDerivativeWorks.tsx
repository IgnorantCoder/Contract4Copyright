import { Action } from 'redux';

interface SetCopyrightsAllowDerivativeWorks extends Action {
    type: 'SET_COPYRIGHTS_ALLOW_DERIVATIVE_WORKS';
    payload: {
        value: boolean
    };
}

export default SetCopyrightsAllowDerivativeWorks;
