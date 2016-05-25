//https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-BrowserName

//Scenario : un utilisateur arrive sur la page d'accueil et clique sur le bouton de quicksearch
var assert = require('assert');
var webdriver = require('selenium-webdriver');
var URL = 'http://focus-demo.dev.klee.lan.net/#';
var CreateAndQuitBrowser = require('./createAndQuitBrowser');

const testGenerator = browsers => {
    browsers.forEach(browser => {
        const browserName = browser.name;
        const version = browser.version;
        describe(`testing javascript in ${browserName} version ${version}`, () => {
            beforeEach(() => {
                CreateAndQuitBrowser.createBrowser(browserName, URL, this);
            });
            afterEach(() => {
                CreateAndQuitBrowser.quitBrowser(this);
            });
            it('Check quick search panel', done => {
                var _this = this;
                //On attend que la page d'accueil se charge avant de cliquer
                this.browser.wait(function() {
                    return _this.browser.isElementPresent(webdriver.By.css('[data-focus="menu-items"] li:nth-child(2)'));
                }, 5000);
                const quickSearchMenu = this.browser.findElement(webdriver.By.css('[data-focus="menu-items"] li:nth-child(2)'));
                quickSearchMenu.click();
                //On met un timeout pour attendre que la page s'affiche
                this.browser.wait(function() {
                    return _this.browser.isElementPresent(webdriver.By.css('[data-demo="quick-search-view"] h5'));
                }, 5000);
                const qsTitle = this.browser.findElement(webdriver.By.css('[data-demo="quick-search-view"] h5'));
                qsTitle.getText().then(txt => {
                    assert.equal(txt, 'Recherche rapide');
                    done();
                });
            });
        });
    });
};

testGenerator(require('./browsers'));
