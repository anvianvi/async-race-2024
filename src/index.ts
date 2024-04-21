import { pageListeners } from './list-of-page-listeners';
import { renderMainView } from './render-functions/main-view';
import { updateState } from './update-state';

const startApp = async () => {
    alert(`By default, the app is configured to communicate with a remote server located at "https://flint-brazen-catshark.glitch.me/".
    
    Please note that the initial server response time may be around 20 seconds, so pls f5 the page.`);

    renderMainView();
    await updateState().then(() => renderMainView());
    pageListeners();
};
startApp();
