import { store } from './store';

export const startDriving = async (id: number): Promise<{ success: boolean; id: number; time: number }> => {
    const startButton = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
    const stopButton = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;

    startButton.disabled = true;

    const { velocity, distance } = await startCar(id);
    const time = Math.round(distance / velocity);

    stopButton.disabled = false;

    const car = document.getElementById(`car-${id}`) as HTMLElement;
    const flag = document.getElementById(`flag-${id}`) as HTMLElement;
    const engineBrokeMessage = document.getElementById(`engine-broke-${id}`) as HTMLElement;

    const carModelWidthInPx = 90;
    const currentDistance = Math.floor(calculateDistance(car, flag) + carModelWidthInPx);

    const animationData = animation(car, currentDistance, time);

    store.animation[id] = animationData;

    const driveData = await driveCar(id);
    const { success } = driveData;

    if (!success) {
        const brokeEngine = document.getElementById(`car-road-${id}`) as HTMLElement;
        window.cancelAnimationFrame(animationData.id);
        brokeEngine.style.backgroundColor = 'palevioletred';
        engineBrokeMessage.style.display = 'block';
        const carName = brokeEngine.querySelector('.car-name')?.textContent || '';
        engineBrokeMessage.innerHTML = `${carName} is out of race because the engine was broken down`;
    }

    return { success, id, time };
};
