import { creteNewCar } from './event-listeners/crete-new-car';
import { updateSelectedCar } from './event-listeners/update-car';
import { viewBlockSelector } from './event-listeners/view-block-selector';

const pageListeners = async () => {
    viewBlockSelector();
    // buttonToggler();
    // generateButtonListener();
    // prevNextButtonsListener();
    // sortingCardsButtonsListener();
    // carControlsListener();
    // goRacelistener();
    // stopAndResetRace();
    creteNewCar();
    updateSelectedCar();
};

export default pageListeners;
