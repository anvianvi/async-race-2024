import { store } from '../helpers/store';
import { renderWinnersBlock } from '../render-functions/winners-block';
import { updateWinners } from '../update-state';

export const toggleCarsSortOrder = () => {
    store.sortOrder = store.sortOrder === 'asc' ? 'desc' : 'asc';
};

export const sortingCardsButtonsListener = async (): Promise<void> => {
    const sortByWins = document.getElementById('sort-by-wins') as HTMLButtonElement;
    const sortByTime = document.getElementById('sort-by-time') as HTMLButtonElement;
    const winners = document.getElementById('winners');

    if (sortByWins)
        sortByWins.addEventListener('click', async () => {
            store.sortBy = 'wins';
            toggleCarsSortOrder();
            await updateWinners();
            if (winners) winners.innerHTML = renderWinnersBlock();
            await sortingCardsButtonsListener();
        });

    if (sortByTime)
        sortByTime.addEventListener('click', async () => {
            store.sortBy = 'time';
            toggleCarsSortOrder();
            await updateWinners();
            if (winners) winners.innerHTML = renderWinnersBlock();
            await sortingCardsButtonsListener();
        });
};
