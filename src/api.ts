import {
    Car,
    CarDriveResponse,
    CarTemplate,
    GetCarsResponse,
    Winner,
    WinnerTemplate,
    WinnersResponse,
    startStopCarResponse,
} from './types';

const base = 'https://flint-brazen-catshark.glitch.me/';
// const base = 'http://127.0.0.1:3000/'
const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

export const getCars = async (
    numberOfPageToDisplay: number,
    elementsPerPage: number = 10
): Promise<GetCarsResponse> => {
    try {
        const response = await fetch(`${garage}?_page=${numberOfPageToDisplay}&_limit=${elementsPerPage}`);

        if (!response.ok) {
            throw new Error('Failed to fetch cars');
        }

        const count = Number(response.headers.get('X-Total-Count'));
        const items = (await response.json()) as Car[];

        return { items, count };
    } catch (error) {
        throw new Error(`Failed to fetch cars: ${error}`);
    }
};

export const getCar = async (id: number): Promise<Car> => {
    try {
        const response = await fetch(`${garage}/${id}`);

        if (!response.ok) {
            throw new Error('Failed to fetch car');
        }

        return (await response.json()) as Car;
    } catch (error) {
        throw new Error(`Failed fetching car by ID: ${error}`);
    }
};

export const createCar = async (body: CarTemplate): Promise<Car> => {
    try {
        const response = await fetch(`${garage}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to create car');
        }

        return (await response.json()) as Car;
    } catch (error) {
        throw new Error(`Failed in creating car: ${error}`);
    }
};

export const deleteCar = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`${garage}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Failed to delete car');
        }
    } catch (error) {
        throw new Error(`Failed to delite car by ID: ${error}`);
    }
};

export const updateCar = async (body: CarTemplate, id: number): Promise<Car> => {
    try {
        const response = await fetch(`${garage}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to update car');
        }

        return (await response.json()) as Car;
    } catch (error) {
        throw new Error(`Failed in car updating by ID ${id}: ${error}`);
    }
};

export const startCar = async (id: number): Promise<startStopCarResponse> => {
    try {
        const response = await fetch(`${engine}?id=${id}&status=started`, {
            method: 'PATCH',
        });
        if (!response.ok) {
            throw new Error('Failed to start car');
        }
        return (await response.json()) as startStopCarResponse;
    } catch (error) {
        throw new Error(`Error starting car with ID ${id}:: ${error}`);
    }
};

export const stopCar = async (id: number): Promise<startStopCarResponse> => {
    try {
        const response = await fetch(`${engine}?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
        if (!response.ok) {
            throw new Error('Failed to stop car');
        }
        return (await response.json()) as startStopCarResponse;
    } catch (error) {
        throw new Error(`Error stopping car with ID ${id}: ${error}`);
    }
};

export const driveCar = async (id: number): Promise<CarDriveResponse> => {
    try {
        const response = await fetch(`${engine}?id=${id}&status=drive`, { method: 'PATCH' });
        if (!response.ok) {
            throw new Error('Failed to drive car');
        }
        return { ...(await response.json()), success: true };
    } catch (error) {
        console.error(`Error driving car with ID ${id}:`, error);
        return { success: false };
    }
};

export const getSortOrder = (sort: string | null, order: string | null): string => {
    return sort && order ? `&_sort=${sort}&_order=${order}` : '';
};

export const getWinners = async (
    page: number,
    sort: string | null,
    order: string | null,
    ItemsPerWinnersPage: number = 7
): Promise<WinnersResponse> => {
    try {
        const response = await fetch(
            `${winners}?_page=${page}&_limit=${ItemsPerWinnersPage}&${getSortOrder(sort, order)}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch winners');
        }

        const items = await response.json();
        const winnersWithCars = await Promise.all(
            items.map(async (winner: Winner) => ({
                ...winner,
                car: await getCar(winner.id),
            }))
        );

        const count = response.headers.get('X-Total-Count');
        return { items: winnersWithCars, count };
    } catch (error) {
        throw new Error(`Error fetching winners: ${error}`);
    }
};
export const getWinner = async (id: number): Promise<Winner> => {
    try {
        const response = await fetch(`${winners}/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch winner with ID ${id}`);
        }
        return (await response.json()) as Winner;
    } catch (error) {
        throw new Error(`Error fetching winner with ID ${id}: ${error}`);
    }
};

export const deleteWinner = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`${winners}/${id}`, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error(`Failed to delete winner with ID ${id}`);
        }
    } catch (error) {
        throw new Error(`Error deleting winner with ID ${id}: ${error}`);
    }
};

export const createWinner = async (body: WinnerTemplate): Promise<WinnerTemplate> => {
    try {
        const response = await fetch(`${winners}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to create winner');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error creating winner: ${error}`);
    }
};

export const updateWinner = async (id: number, body: WinnerTemplate): Promise<Winner> => {
    try {
        const response = await fetch(`${winners}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`Failed to update winner with ID ${id}`);
        }
        return (await response.json()) as Winner;
    } catch (error) {
        throw new Error(`Error updating winner with ID ${id}: ${error}`);
    }
};

export const getWinnerStatus = async (id: number): Promise<number> => {
    try {
        const response = await fetch(`${winners}/${id}`);
        return response.status;
    } catch (error) {
        throw new Error(`Error fetching status for winner with ID ${id}: ${error}`);
    }
};

export const saveWinners = async ({ id, time }: { id: number; time: number }): Promise<void> => {
    try {
        const winnerStatus = await getWinnerStatus(id);
        if (winnerStatus === 404) {
            await createWinner({ id, wins: 1, time });
        } else {
            const winner = await getWinner(id);
            await updateWinner(id, {
                id,
                wins: winner.wins + 1,
                time: time < winner.time ? time : winner.time,
            });
        }
    } catch (error) {
        throw new Error(`Error saving winner with ID ${id}: ${error}`);
    }
};
