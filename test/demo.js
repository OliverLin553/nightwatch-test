
describe('search for input', function() {
  it('The name of the shop', function(client) {
    const mainPage = client.page.mainPage();
    mainPage.navigate().pageTest();
    client.assert.containsText('.shop-name a', '京东Apple产品专营店')
    client.end();
  });
})