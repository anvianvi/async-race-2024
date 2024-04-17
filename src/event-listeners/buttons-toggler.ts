import { store } from '../helpers/store';

export const buttonToggler = async (): Promise<void> => {
    const prevButton = document.getElementById('prev') as HTMLButtonElement;
    const nextButton = document.getElementById('next') as HTMLButtonElement;

    const currentPage = store.view === 'garagePage' ? store.carsPage : store.winnersPage;
    const itemCount = store.view === 'garagePage' ? store.carsCount : store.winnersCount;

    nextButton.disabled = currentPage * (store.view === 'garagePage' ? 7 : 10) >= itemCount;
    prevButton.disabled = currentPage <= 1;
};
