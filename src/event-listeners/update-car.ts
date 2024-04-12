import { updateCar } from '../api';
import { store } from '../helpers/store';
import { renderGarageBlock } from '../render-functions/garage-block';
import { renderWinnersBlock } from '../render-functions/winners-block';
import { updateCars, updateWinners } from '../update-state';

export const updateSelectedCar = async (): Promise<void> => {
    const updateButton = document.getElementById('update-btn') as HTMLButtonElement;
    updateButton!.addEventListener('click', async (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('update-name') as HTMLInputElement;
        const colorInput = document.getElementById('update-color') as HTMLInputElement;
        const garage = document.getElementById('garage');
        const winners = document.getElementById('winners');

        const car = {
            name: nameInput.value,
            color: colorInput.value,
        };

        if (store.selectedCarID !== null) {
            try {
                await updateCar(car, store.selectedCarID);
                await updateCars();
                await updateWinners();
                winners!.innerHTML = renderWinnersBlock();
                garage!.innerHTML = renderGarageBlock();
            } catch (error) {
                throw error;
            }
        }

        nameInput.disabled = true;
        nameInput.value = '';
        colorInput.disabled = true;
        colorInput.value = '#ffe042';
        updateButton.disabled = true;
        store.selectedCarID = null;
    });
};
