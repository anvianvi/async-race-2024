import { createCar } from '../api';
import { generateRandomCarName, generateRandomColor } from '../helpers/generators';
import { renderGarageBlock } from '../render-functions/garage-block';
import { updateCars } from '../update-state';
import { buttonToggler } from './buttons-toggler';

export const creteNewCar = async (): Promise<void> => {
    const createCarButton = document.getElementById('create-btn') as HTMLButtonElement;
    createCarButton.addEventListener('click', async (e) => {
        e.preventDefault();
        const nameInput = document.getElementById('create-name') as HTMLInputElement;
        const colorInput = document.getElementById('create-color') as HTMLInputElement;
        const garage = document.getElementById('garage');

        const car = {
            name: nameInput.value,
            color: colorInput.value,
        };

        try {
            await createCar(car);
            await updateCars();
            garage!.innerHTML = renderGarageBlock();
            nameInput.value = generateRandomCarName();
            colorInput.value = generateRandomColor();
            buttonToggler();
        } catch (error) {
            throw error;
        }
    });
};
