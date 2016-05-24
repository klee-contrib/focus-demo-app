//https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-BrowserName

//Permet de tester quelques titres sur la page d'accueil
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
            it('Check the search cartridge message', done => {
                const headline = this.browser.findElement(webdriver.By.css('[data-focus="cartridge-search"] h1'));
                headline.getText().then(txt => {
                    assert.equal(txt, 'Vous recherchez ?');
                    done();
                });
            });
            it('Check recents movies section title', done => {
                const headline = this.browser.findElement(webdriver.By.css('[data-demo="homepage"] h1'));
                headline.getText().then(txt => {
                    assert.equal(txt, 'Films les plus récents');
                    done();
                });
            });
        });
    });
};

testGenerator(require('./browsers'));
