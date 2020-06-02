import { Selector, t } from 'testcafe';
import { ReactSelector } from 'testcafe-react-selectors';

class SellTradePage {
  private yearLabel: Selector;
  private makeLabel: Selector;
  private modelLabel: Selector;
  private urlRoute: string;
  private getEstimateButton: Selector;
  private basicDetailsLabel: Selector;

  constructor() {
    this.urlRoute = '/sell-my-car';
    this.yearLabel = ReactSelector('select').withProps({ name: 'Year' });
    this.makeLabel = ReactSelector('select').withProps({ name: 'Make' });
    this.modelLabel = ReactSelector('select').withProps({ name: 'Model' });
    this.getEstimateButton = Selector('button').withText('Get my estimate');
  }

  public async launchSellTradeCarURL() {
    await t.navigateTo(this.urlRoute);
  }

  public async selectYear(year: string) {
    await t.click(this.yearLabel).click(Selector('option').withExactText(year));
  }

  public async selectMake(make: string) {
    await t.click(this.makeLabel).click(Selector('option').withExactText(make));
  }

  public async selectModel(model: string) {
    await t
      .click(this.modelLabel)
      .click(Selector('option').withExactText(model));
  }

  public async clickEstimateButton() {
    await t.click(this.getEstimateButton);
  }

  public async checkDetailsPageShown(text: string) {
    await t.expect(Selector('p').withText(text).exists).ok();
  }
}

export const sellTradePage: SellTradePage = new SellTradePage();
