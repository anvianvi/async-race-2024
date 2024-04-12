import { deleteCar, deleteWinner, getCar, getWinner } from '../api';
import { store } from '../helpers/store';
import { renderGarageBlock } from '../render-functions/garage-block';
import { renderWinnersBlock } from '../render-functions/winners-block';
import { updateCars, updateWinners } from '../update-state';

export const carControls = async () => {
    const updateNameInput = document.getElementById('update-name') as HTMLInputElement;
    const updateColorInput = document.getElementById('update-color') as HTMLInputElement;
    const updateButton = document.getElementById('update-btn') as HTMLButtonElement;
    const garageBlock = document.getElementById('garage');
    const winnersBlock = document.getElementById('winners');

    garageBlock!.addEventListener('click', async (e) => {
        const target = e.target as HTMLElement;

        if (target.classList.contains('select-btn')) {
            const id = Number(target.id.split('select-car-')[1]);
            const selectedCar = await getCar(id);
            store.selectedCarID = selectedCar.id;
            updateNameInput.value = selectedCar.name;
            updateColorInput.value = selectedCar.color;
            updateNameInput.disabled = false;
            updateColorInput.disabled = false;
            updateButton.disabled = false;
        }

        if (target.classList.contains('remove-btn')) {
            const id = Number(target.id.split('remove-car-')[1]);
            await deleteCar(id);
            const winner = await getWinner(id);

            if (winner) {
                await deleteWinner(id);
                await updateWinners();
                winnersBlock!.innerHTML = renderWinnersBlock();
            }
            await updateCars();
            garageBlock!.innerHTML = renderGarageBlock();
        }

        if (target.classList.contains('start-engine-btn')) {
            const id = Number(target.id.split('start-engine-car-')[1]);
            startDriving(id);
        }
        if (target.classList.contains('stop-engine-btn')) {
            const id = Number(target.id.split('stop-engine-car-')[1]);
            stopDriving(id);
        }
    });
};
