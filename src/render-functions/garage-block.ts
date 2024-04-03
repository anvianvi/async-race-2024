
import carImage from '../helpers/car-svg';
import { store } from '../helpers/store';

export const renderGarageBlock = () => `
<div class="garage-heading">
  <div>Cars in garage: ${store.carsCount}</div>
  <div>Page № ${store.carsPage}</div>
</div>
  ${store.cars.map((car) => `
<div class="car-container" id="car-road-${car.id}">
  <div class="controll-buttons">
    <button class="select-btn" id="select-car-${car.id}">Select</button>
    <button class="remove-btn" id="remove-car-${car.id}">Remove</button>
    <span class="car-name">${car.name}</span>
    <button class="start-engine-btn" id="start-engine-car-${car.id}">Start</button>
    <button class="stop-engine-btn" id="stop-engine-car-${car.id}" disabled>Stop</button>
  </div>

  <div class="road">
    <div class="car" id="car-${car.id}">${carImage(car.color)}</div>
    <div class="flag" id="flag-${car.id}">&#127937;</div>
  </div>
  <div id="engine-broke-${car.id}" class = "message" display="none"></div>
</div>`).join('')}
<p class="winner-mesage" id="winner-mesage"></p>  
`;

// export default renderGarage;
