import pageListeners from './list-of-page-listeners';
import { renderMainView } from './render-functions/main-view';
import { updateState } from './update-state';

const startApp = async () => {
    renderMainView();
    await updateState().then(() => renderMainView());
    pageListeners();
};
startApp();
