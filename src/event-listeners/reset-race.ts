import { stopDriving } from '../helpers/stop-driving';
import { store } from '../helpers/store';

const stopAndResetRace = async () => {
    const resetButton = document.getElementById('reset') as HTMLButtonElement;

    resetButton?.addEventListener('click', async () => {
        const startRaceButton = document.getElementById('race') as HTMLButtonElement;
        const winnerMessage = document.getElementById('winner-mesage');
        winnerMessage?.classList.remove('display');
        resetButton.disabled = true;
        startRaceButton.disabled = true;
        store.cars.forEach(({ id }) => {
            stopDriving(id);
        });
        resetButton.disabled = false;
        startRaceButton.disabled = false;
    });
};

export default stopAndResetRace;
