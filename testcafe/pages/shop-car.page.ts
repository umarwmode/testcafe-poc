import { Selector, t } from 'testcafe';

class ShopCarPage {
  private bodyStyleDropDown: Selector;
  private searchResult: Selector;
  private carDetailsHeader: Selector;
  private urlRoute: string;

  constructor() {
    this.urlRoute = '/cars/oregon';
    this.bodyStyleDropDown = Selector('p').withText('Bodystyle');
    this.searchResult = Selector('.CarBrowserListSection__body div');
    this.carDetailsHeader = Selector('h1 span');
  }

  public async launchShopCarsURL() {
    await t.navigateTo(this.urlRoute);
  }

  public async clickBodyStyleDropdown() {
    await t.click(this.bodyStyleDropDown);
  }

  public async clickCarType(carType: string) {
    await t.click(Selector('p').withText(carType));
  }

  public async clickOnCarDetails() {
    await t.click(this.searchResult);
  }

  public async checkCarDetailsShown() {
    await t.expect(this.carDetailsHeader.exists).ok();
  }
}

export const shopCarPage: ShopCarPage = new ShopCarPage();
