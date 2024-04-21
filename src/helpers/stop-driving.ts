import { stopCar } from '../api';
import { store } from './store';

export const stopDriving = async (id: number): Promise<void> => {
    const startButton = document.getElementById(`start-engine-car-${id}`) as HTMLButtonElement;
    const stopButton = document.getElementById(`stop-engine-car-${id}`) as HTMLButtonElement;
    const brokeEngine = document.getElementById(`car-road-${id}`) as HTMLElement;
    const engineBrokeMessage = document.getElementById(`engine-broke-${id}`) as HTMLElement;

    stopButton.disabled = true;
    await stopCar(id);

    brokeEngine.style.backgroundColor = 'transparent';
    engineBrokeMessage.style.display = 'none';
    startButton.disabled = false;

    const car = document.getElementById(`car-${id}`);
    car!.style.transform = 'translateX(0)';

    if (store.animation[id]) {
        window.cancelAnimationFrame(store.animation[id].id);
        delete store.animation[id];
    }
};
