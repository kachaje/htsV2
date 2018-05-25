module.exports = {
  'Anonymous Client: Refuses Test': function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 1000)
      .assert
      .title('HTS')
      .assert
      .visible('#txtUsername')
      .click('#txtUsername')
      .waitForElementVisible('#dha_C', 1000)
      .click('#dha_C')
      .click('#dha_P')
      .click('#dha_6')
      .click('#dha_K')
      .assert
      .visible('#txtPassword')
      .click('#txtPassword')
      .assert
      .visible('#qwe_t')
      .click('#qwe_t')
      .click('#qwe_e')
      .click('#qwe_s')
      .click('#qwe_t')
      .assert
      .visible('#btnLogin')
      .click('#btnLogin')
      .waitForElementVisible('#u14HelpText', 1000)
      .assert
      .containsText('#u14HelpText', 'Scan Workstation Location')
      .assert
      .visible('#touchscreenTextInput')
      .setValue('#touchscreenTextInput', 'Room 1$')
      .waitForElementVisible('#facility', 3000)
      .assert
      .visible('#li-HTS')
      .click('#li-HTS')
      .waitForElementVisible('#btnNext.green.nav-buttons', 1000)
      .assert
      .visible('#btnNext.green.nav-buttons')
      .click('#btnNext.green.nav-buttons')
      .waitForElementVisible('#u14HelpText', 1000)
      .assert
      .containsText('#u14HelpText', 'Client consents to be contacted')
      .assert
      .visible('#No.selectLi')
      .click('#No.selectLi')
      .click('#btnNext.green.nav-buttons')
      .waitForElementVisible('#u14HelpText', 1000)
      .assert
      .containsText('#u14HelpText', 'Age')
      .assert
      .visible('#period_3')
      .assert
      .visible('#period_year')
      .click('#period_3')
      .click('#period_3')
      .click('#period_year')
      .click('#btnNext.green.nav-buttons')
      .waitForElementVisible('#u14HelpText', 1000)
      .assert
      .containsText('#u14HelpText', 'Gender')
      .assert
      .visible('#Female.selectLi')
      .click('#Female.selectLi')
      .click('#btnNext.green.nav-buttons')
      .waitForElementVisible('#u14HelpText', 1000)
      .assert
      .containsText('#u14HelpText', 'Partner present')
      .assert
      .visible('#No.selectLi')
      .click('#No.selectLi')
      .click('#btnNext.green.nav-buttons')
      .waitForElementVisible('#u14HelpText', 1000)
      .assert
      .containsText('#u14HelpText', 'HTS Access Type')
      .assert
      .visible('#Routine_HTS__PITC__within_Health_Service.selectLi')
      .click('#Routine_HTS__PITC__within_Health_Service.selectLi')
      .waitForElementVisible('#u14HelpText', 1000)
      .assert
      .containsText('#u14HelpText', 'Last HIV Test Result')
      .assert
      .visible('#Never_Tested.selectLi')
      .click('#Never_Tested.selectLi')
      .waitForElementVisible('#u14HelpText', 1000)
      .assert
      .containsText('#u14HelpText', 'Client Risk Category')
      .assert
      .visible('#Low_Risk.selectLi')
      .click('#Low_Risk.selectLi')
      .waitForElementVisible('#u14HelpText', 1000)
      .assert
      .containsText('#u14HelpText', 'Pregnant?')
      .assert
      .visible('#No.selectLi')
      .click('#No.selectLi')
      .click('#btnNext.green.nav-buttons')
      .waitForElementVisible('#u14HelpText', 1000)
      .assert
      .containsText('#u14HelpText', 'Client gives consent to be tested?')
      .assert
      .visible('#No.selectLi')
      .click('#No.selectLi')
      .end()
  }
}