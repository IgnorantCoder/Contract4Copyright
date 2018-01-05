import {Action} from 'redux';

interface ChangeCopyrightsLicenseHomepageName extends Action {
    type: 'CHANGE_COPYRIGHTS_LICENSE_HOMEPAGE_NAME';
    payload: {
        changedName: string
    }
}

export default ChangeCopyrightsLicenseHomepageName;
