// import render from './rander-page';
// import updateState from './update-state';
// import pageListeners from './list-of-page-listeners';

import pageListeners from './list-of-page-listeners';
import { renderMainView } from './render-functions/main-view';
import { updateState } from './update-state';

const startApp = async () => {
    await updateState();
    renderMainView();
    pageListeners();
};
startApp();
