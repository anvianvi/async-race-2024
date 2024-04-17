import { Car, Winner } from '../types';

type Animation = {
    id: number;
};

// interface AnimationState {
//     id: number;
// }

export type Store = {
    carsPage: number;
    cars: Car[];
    carsCount: number;
    winnersPage: number;
    winners: Winner[];
    winnersCount: number;
    view: 'garagePage' | 'winnersPage';
    sortBy: string | null; //_sort=['id'|'wins'|'time']

    // _order=['ASC'|'DESC']
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

// export default store;
