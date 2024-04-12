import { getCars, getWinners } from './api';
import { store } from './helpers/store';
import { GetCarsResponse } from './types';

export const updCars = async () => {
    const { items, count } = await getCars(store.carsPage);
    store.cars = items;
    store.carsCount = count;
};
export const updateCars = async (): Promise<void> => {
    try {
        const { items, count }: GetCarsResponse = await getCars(store.carsPage);
        store.cars = items;
        store.carsCount = count;
    } catch (error) {
        // console.error('Error updating cars:', error);
        throw error;
    }
};

export const updWinners = async () => {
    const { items, count } = await getWinners(store.winnersPage, store.sortBy, store.sortOrder);
    store.winners = items;
    store.winnersCount = Number(count);
};

const updateState = async () => {
    await updCars();
    await updWinners();
};

export default updateState;
