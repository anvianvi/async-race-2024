import { store } from '../helpers/store';
import { renderGarageBlock } from '../render-functions/garage-block';
import { renderWinnersBlock } from '../render-functions/winners-block';
import { updateCars, updateWinners } from '../update-state';
import { buttonToggler } from './buttons-toggler';
import { sortingCardsButtonsListener } from './sort-winners';

export const paginationButtons = async () => {
    const prevButton = document.getElementById('prev') as HTMLButtonElement;
    const nextButton = document.getElementById('next') as HTMLButtonElement;
    const garage = document.getElementById('garage');
    const winners = document.getElementById('winners');

    prevButton.addEventListener('click', async () => {
        switch (store.view) {
            case 'garagePage': {
                store.carsPage -= 1;
                await updateCars();
                if (garage) garage.innerHTML = renderGarageBlock();
                break;
            }
            case 'winnersPage': {
                store.winnersPage -= 1;
                await updateWinners();
                if (winners) winners.innerHTML = renderWinnersBlock();
                break;
            }
            default:
                throw new Error(`Unexpected view type received: ${store.view}`);
        }
        buttonToggler();
        await sortingCardsButtonsListener();
    });

    nextButton.addEventListener('click', async () => {
        switch (store.view) {
            case 'garagePage': {
                store.carsPage += 1;
                await updateCars();
                if (garage) garage.innerHTML = renderGarageBlock();
                break;
            }
            case 'winnersPage': {
                store.winnersPage += 1;
                await updateWinners();
                if (winners) winners.innerHTML = renderWinnersBlock();
                break;
            }
            default:
                throw new Error(`Unexpected view type received: ${store.view}`);
        }
        buttonToggler();
        await sortingCardsButtonsListener();
    });
};
