import { Car } from '../types';
import { store } from './store';

interface RaceResult {
    success: boolean;
    id: number;
    time: number;
}

const calculateRaceWinner = async (promises: Promise<RaceResult>[], ids: number[]): Promise<Car | null> => {
    const { success, id, time } = await Promise.race(promises);
    if (!success) {
        const failedIndex = ids.findIndex((index: number) => index === id);
        promises.splice(failedIndex, 1);
        ids.splice(failedIndex, 1);
        if (promises.length < 1) return null;
        return calculateRaceWinner(promises, ids);
    }
    const winnerCar = store.cars.find((car) => car.id === id);
    return winnerCar ? { ...winnerCar, time: +(time / 1000).toFixed(2) } : null;
};

export const startRace = async (promis: (id: number) => Promise<RaceResult>): Promise<Car | null> => {
    const promises = store.cars.map(({ id }) => promis(id));
    const winner = await calculateRaceWinner(
        promises,
        store.cars.map((car) => car.id)
    );
    return winner;
};
