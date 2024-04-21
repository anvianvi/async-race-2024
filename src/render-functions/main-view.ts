import { generateRandomCarName } from '../helpers/generators';
import { renderGarageBlock } from './garage-block';
import { renderWinnersBlock } from './winners-block';

export const renderMainView = async () => {
    const fragment = new DocumentFragment();
    const main = document.createElement('main');
    main.classList.add('main');
    main.innerHTML = `
  <div class="navigation-panel wrapper">
    <div class="nav-btn" id="to-garage">To Garage</div>
    <div class="nav-btn" id="to-winners">To Winners</div>
  </div>

  <div class="action-panel wrapper">
  <div class="hide-panel-wrapper" id="hide-panel-wrapper"></div>
    <div class="forms">
      <form action="" class="form" id="create">
        <input type="text" class="input" id="create-name" value="">
        <input type="color" class="color" id="create-color" value="#ffe042">
        <button class="action-btn"  id="create-btn">Create</button>
      </form>
      <form action="" class="form" id="update">
        <input type="text" class="input" id="update-name" name="name" disabled >
        <input type="color" class="color" id="update-color" name="color" value="#ffe042" disabled>
        <button class="action-btn" id="update-btn" "type="submit" disabled>Update</button>
      </form>
    </div>
    <div class="race-controls">
      <button class="action-btn race-btn" id="race">Race</button>
      <button class="action-btn reset-btn" id="reset"  >Reset</button>
      <button class="action-btn generator-btn" id="generator">Generate cars</button>
    </div>
  </div>

  <div class="pagination-panel wrapper">
    <button class="action-btn prev-btn" id="prev">PREV</button>
    <button class="action-btn next-btn" id="next">NEXT</button>
  </div>

  <div class="main-panel wrapper">
    <div class="main-screan-wrapper">
      <div class="garage" id="garage">${renderGarageBlock()}</div>
      <div class="winners" id="winners">${renderWinnersBlock()}</div>
    </div>
  </div>
  `;
    fragment.appendChild(main);
    document.body.innerHTML = '';
    document.body.appendChild(fragment);

    (document.getElementById('create-name') as HTMLInputElement).value = generateRandomCarName();
};
