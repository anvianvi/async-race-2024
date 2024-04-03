// const store = {
//   carsPage: 1,
//   cars: [],
//   carsCount: 1,
//   winnersPage: 1,
//   winners: [],
//   winnersCount: 0,
//   view: 'garagePage',
//   sortBy: null,
//   sortOrder: null,
//   selectedCarID: null,
//   animation: {},
// };

// export default store;
export type Car =  {
  id: number;
  name: string;
  color: string;
}

type Animation =  {
  // animation properties here
}

export type Winner = {
  id: number;
  wins: number;
  time: number;
  car: {
    color: string;
    name: string
  }
}

export type Store =  {
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
  animation: Animation;
}

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
  animation: {},
};

// export default store;
