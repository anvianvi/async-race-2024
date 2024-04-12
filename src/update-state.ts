import { getCars, getWinners } from './api';
import { store } from './helpers/store';
import { GetCarsResponse, WinnersResponse } from './types';

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

export const updateWinners = async (): Promise<void> => {
    try {
        const { items, count }: WinnersResponse = await getWinners(store.winnersPage, store.sortBy, store.sortOrder);
        store.winners = items;
        store.winnersCount = Number(count);
    } catch (error) {
        // console.error('Error updating winners:', error);
        throw error;
    }
};

export const updateState = async (): Promise<void> => {
    try {
        await updateCars();
        await updateWinners();
    } catch (error) {
        // console.error('Error updating state:', error);
        throw error;
    }
};
