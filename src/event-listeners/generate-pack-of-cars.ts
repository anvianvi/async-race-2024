import { createCar } from '../api';
import { generateRandomCarsTemplates } from '../helpers/generators';
import { renderGarageBlock } from '../render-functions/garage-block';
import { updateCars } from '../update-state';
import { buttonToggler } from './buttons-toggler';

export const generatePackOfCars = async () => {
    const generateButton = document.getElementById('generator') as HTMLButtonElement;
    const garage = document.getElementById('garage');

    if (generateButton) {
        generateButton.addEventListener('click', async () => {
            generateButton.disabled = true;

            const countOfCarsNeededToGenereteOnClickAcordingToRequirements = 100;
            const cars = generateRandomCarsTemplates(countOfCarsNeededToGenereteOnClickAcordingToRequirements);
            await Promise.all(cars.map(async (car) => createCar(car)));
            await updateCars();
            if (garage) {
                garage.innerHTML = renderGarageBlock();
            }
            generateButton.disabled = false;
            buttonToggler();
        });
    }
};
