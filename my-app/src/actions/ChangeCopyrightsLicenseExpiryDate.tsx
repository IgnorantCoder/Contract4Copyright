import { Action } from 'redux';

interface ChangeCopyrightsLicenseExpiryDate extends Action {
    type: 'CHANGE_COPYRIGHTS_LICENSE_EXPIRY_DATE';
    payload: {
        changed: Date;
    };
}

export default ChangeCopyrightsLicenseExpiryDate;
