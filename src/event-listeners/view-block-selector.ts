import { store } from '../helpers/store';
import { renderGarageBlock } from '../render-functions/garage-block';
import { renderWinnersBlock } from '../render-functions/winners-block';
import { buttonToggler } from './buttons-toggler';

export const viewBlockSelector = async (): Promise<void> => {
    const toWinnersButton = document.getElementById('to-winners') as HTMLButtonElement;
    const toGarageButton = document.getElementById('to-garage') as HTMLButtonElement;
    const garageBlock = document.getElementById('garage');
    const winnersBlock = document.getElementById('winners');
    const hidePanelWrapper = document.getElementById('hide-panel-wrapper');

    toWinnersButton.addEventListener('click', async () => {
        winnersBlock!.innerHTML = renderWinnersBlock();
        garageBlock!.innerHTML = '';
        hidePanelWrapper!.style.display = 'block';
        garageBlock!.classList.add('moveleft');
        store.view = 'winnersPage';
        buttonToggler();
    });

    toGarageButton.addEventListener('click', async () => {
        garageBlock!.innerHTML = renderGarageBlock();
        hidePanelWrapper!.style.display = 'none';
        garageBlock!.classList.remove('moveleft');
        store.view = 'garagePage';
        buttonToggler();
    });
};
