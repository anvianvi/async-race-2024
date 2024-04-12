import { carControls } from './event-listeners/car-controll';
import { creteNewCar } from './event-listeners/crete-new-car';
import { updateSelectedCar } from './event-listeners/update-car';
import { viewBlockSelector } from './event-listeners/view-block-selector';

const pageListeners = async () => {
    viewBlockSelector();
    // generateButtonListener();
    // prevNextButtonsListener();
    // sortingCardsButtonsListener();
    carControls();
    // goRacelistener();
    // stopAndResetRace();
    creteNewCar();
    updateSelectedCar();
};

export default pageListeners;
