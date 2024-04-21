import { CarTemplate } from '../types';

const names: string[] = [
    'Porshe',
    'Tesla',
    'Kia',
    'Peugeot',
    'Honda',
    'Jaguar',
    'Mazda',
    'Volvo',
    'MINI',
    'Toyota',
    'SomeSuperFast',
];
const models: string[] = [
    '911',
    'Model Y',
    'Seltos',
    '206',
    'CR-V',
    'F-PACE',
    'CX-5',
    'XC60',
    '3-door',
    'Corolla',
    'SuperCar',
];

export const generateRandomCarName = (): string => {
    const name = names[Math.floor(Math.random() * models.length)];
    const model = models[Math.floor(Math.random() * models.length)];
    return `${name} ${model}`;
};

export const generateRandomColor = (): string => {
    const symbols = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const generateRandomCarsTemplates = (countCars: number): CarTemplate[] =>
    new Array(countCars).fill(0).map(() => ({
        name: generateRandomCarName(),
        color: generateRandomColor(),
    }));
