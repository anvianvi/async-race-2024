import { stopCar } from '../api';
import store from './store';

const stopDriving = async (id) => {
  const startButton = document.getElementById(`start-engine-car-${id}`);
  const stopButton = document.getElementById(`stop-engine-car-${id}`);
  const brokeEngine = document.getElementById(`car-road-${id}`);
  const engineBrokeMessage = document.getElementById(`engine-broke-${id}`);

  stopButton.disabled = true;
  await stopCar(id);
  brokeEngine.style.backgroundColor = 'transparent';
  engineBrokeMessage.style.display = 'none';
  startButton.disabled = false;
  const car = document.getElementById(`car-${id}`);
  car.style.transform = 'translateX(0)';
  if (store.animation[id] !== undefined) window.cancelAnimationFrame(store.animation[id].id);
};

export default stopDriving;
