export type Car = {
    id: number;
    name: string;
    color: string;
};

export type CarTemplate = {
    name: string;
    color: string;
};

export interface GetCarsResponse {
    items: Car[];
    count: number;
}

export type CarDriveResponse = {
    success: boolean;
};

export type Winner = {
    id: number;
    wins: number;
    time: number;
    car: {
        color: string;
        name: string;
    };
};

export type WinnerTemplate = {
    id: number;
    wins: number;
    time: number;
};

export type WinnersResponse = {
    items: Winner[];
    count: string | null;
};

export type startStopCarResponse = {
    velocity: number;
    distance: number;
};
