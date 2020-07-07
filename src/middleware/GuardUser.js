import LocalStorageUtils from '../utils/LocalStorageUtils';

function guardUser({ next }) {
    if (LocalStorageUtils.hasToken() == true) {
        console.log('Has Token');
        next('/system');
    } else {
        next('/login');
    }
}

export default guardUser;
