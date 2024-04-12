import carImage from '../helpers/car-svg';
import { store } from '../helpers/store';

export const renderWinnersBlock = () => `
<div class="winners-heading">
<div>Winners: ${store.winnersCount}</div>
<div>Page № ${store.winnersPage}</div>
</div>
  <table cellspacing ="3" border="0" cellpadding="3" >
    <thead>
      <th>№</th>
      <th>Car</th>
      <th>Name</th>
      <th class="sort-by-btn" id="sort-by-wins">Wins</th>
      <th class="sort-by-btn" id="sort-by-time">Best time(seconds)</th>
    </thead>
    <tbody>
    ${store.winners
        .map(
            (winner, index) => `
        <tr>
          <td>${index + 1}</td>
          <td>${carImage(winner.car.color)}</td>
          <td>${winner.car.name}</td>
          <td>${winner.wins}</td>
          <td>${winner.time}</td>
        </tr>
        `
        )
        .join(' ')}
    </tbody>
  </table>`;
