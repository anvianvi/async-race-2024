import { store } from '../helpers/store';

export const buttonToggler = async (): Promise<void> => {
    const prevButton = document.getElementById('prev') as HTMLButtonElement;
    const nextButton = document.getElementById('next') as HTMLButtonElement;

    const currentPage = store.view === 'garagePage' ? store.carsPage : store.winnersPage;
    const itemCount = store.view === 'garagePage' ? store.carsCount : store.winnersCount;

    nextButton.disabled = currentPage * (store.view === 'garagePage' ? 7 : 10) >= itemCount;
    prevButton.disabled = currentPage <= 1;
    // if (store.view === 'garagePage') {
    //     if (store.carsPage * 7 < store.carsCount) {
    //         nextButton.disabled = false;
    //     } else {
    //         nextButton.disabled = true;
    //     }
    //     if (store.carsPage > 1) {
    //         prevButton.disabled = false;
    //     } else {
    //         prevButton.disabled = true;
    //     }
    // } else {
    //     if (store.winnersPage * 10 < store.winnersCount) {
    //         nextButton.disabled = false;
    //     } else {
    //         nextButton.disabled = true;
    //     }
    //     if (store.winnersPage > 1) {
    //         prevButton.disabled = false;
    //     } else {
    //         prevButton.disabled = true;
    //     }
    // }
};
