import { creteNewCar } from './event-listeners/crete-new-car';
import { updateSelectedCar } from './event-listeners/update-car';

const pageListeners = async () => {
    // viewSelector();
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
