import { carControls } from './event-listeners/car-controll';
import { creteNewCar } from './event-listeners/crete-new-car';
import { generatePackOfCars } from './event-listeners/generate-pack-of-cars';
import { updateSelectedCar } from './event-listeners/update-car';
import { viewBlockSelector } from './event-listeners/view-block-selector';

const pageListeners = async () => {
    viewBlockSelector();
    generatePackOfCars();
    // prevNextButtonsListener();
    // sortingCardsButtonsListener();
    carControls();
    // goRacelistener();
    // stopAndResetRace();
    creteNewCar();
    updateSelectedCar();
};

export default pageListeners;
