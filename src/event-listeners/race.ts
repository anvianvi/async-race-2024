import { saveWinners } from '../api';
import { startDriving } from '../helpers/start-driving';
import { startRace } from '../helpers/start-race';
import { renderWinnersBlock } from '../render-functions/winners-block';
import { updateWinners } from '../update-state';
import { sortingCardsButtonsListener } from './sort-winners';

export const goRacelistener = async () => {
    const winnersBlock = document.getElementById('winners');

    const resetButton = document.getElementById('reset') as HTMLButtonElement;
    resetButton.disabled = false;

    const startRaceButton = document.getElementById('race') as HTMLButtonElement;

    startRaceButton.addEventListener('click', async () => {
        const winnerMessage = document.getElementById('winner-mesage');
        resetButton.disabled = true;

        startRaceButton.disabled = true;
        const winner = await startRace(startDriving);
        if (!winner) {
            startRaceButton.disabled = false;
            return;
        }

        if (winnerMessage) {
            winnerMessage.innerHTML = `${winner.name} went first in ${winner.time} seconds!`;
            winnerMessage.classList.add('display');
        }

        await saveWinners(winner);
        await updateWinners();
        if (winnersBlock) winnersBlock.innerHTML = renderWinnersBlock();
        await sortingCardsButtonsListener();
        resetButton.disabled = false;
        startRaceButton.disabled = false;
    });
};
