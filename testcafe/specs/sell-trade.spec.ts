import { waitForReact } from 'testcafe-react-selectors';

import { sellTradePage } from '../pages';
import { getBaseURL } from '../utils';

fixture(`Sell or Trade Cars Page Test`)
  .page(`${getBaseURL()}/sell-my-car`)
  .beforeEach(async () => {
    await waitForReact();
  });

test('user verifies sell cars details', async () => {
  await sellTradePage.selectYear('2018');
  await sellTradePage.selectMake('FIAT');
  await sellTradePage.selectModel('500');
  await sellTradePage.clickEstimateButton();
  await sellTradePage.checkDetailsPageShown('FIAT');
});
