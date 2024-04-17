import { Car, Winner } from '../types';

type Animation = {
    id: number;
};

export type Store = {
    carsPage: number;
    cars: Car[];
    carsCount: number;
    winnersPage: number;
    winners: Winner[];
    winnersCount: number;
    view: 'garagePage' | 'winnersPage';
    sortBy: string | null;
    sortOrder: 'asc' | 'desc' | null;
    selectedCarID: number | null;
    animation: Animation[];
};

export const store: Store = {
    carsPage: 1,
    cars: [],
    carsCount: 1,
    winnersPage: 1,
    winners: [],
    winnersCount: 0,
    view: 'garagePage',
    sortBy: null,
    sortOrder: null,
    selectedCarID: null,
    animation: [],
};
