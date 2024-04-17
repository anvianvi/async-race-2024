import { buttonToggler } from './event-listeners/buttons-toggler';
import { carControls } from './event-listeners/car-controll';
import { creteNewCar } from './event-listeners/crete-new-car';
import { generatePackOfCars } from './event-listeners/generate-pack-of-cars';
import { paginationButtons } from './event-listeners/paggination-buttons';
import { goRacelistener } from './event-listeners/race';
import stopAndResetRace from './event-listeners/reset-race';
import { sortingCardsButtonsListener } from './event-listeners/sort-winners';
import { updateSelectedCar } from './event-listeners/update-car';
import { viewBlockSelector } from './event-listeners/view-block-selector';

const pageListeners = async () => {
    viewBlockSelector();
    buttonToggler();
    generatePackOfCars();
    paginationButtons();
    sortingCardsButtonsListener();
    carControls();
    goRacelistener();
    stopAndResetRace();
    creteNewCar();
    updateSelectedCar();
};

export default pageListeners;
