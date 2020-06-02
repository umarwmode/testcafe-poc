import { shopCarPage } from '../pages';
import { getBaseURL } from '../utils';

fixture(`Shop Car Page Test`).page(getBaseURL());

test('user verifies car details', async () => {
  await shopCarPage.launchShopCarsURL();
  await shopCarPage.clickBodyStyleDropdown();
  await shopCarPage.clickCarType('SUV');
  await shopCarPage.clickOnCarDetails();
  await shopCarPage.checkCarDetailsShown();
});
