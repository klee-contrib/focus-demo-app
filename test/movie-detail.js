//https://wiki.saucelabs.com/display/DOCS/Test+Configuration+Options#TestConfigurationOptions-BrowserName

//Scenario : un utilisateur arrive sur la page d'accueil et clique sur le bouton consulter la fiche d'un film.
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
            it('Movie detail page', done => {
                const consultBtn = this.browser.findElement(webdriver.By.css('[data-demo="concept-card-list"] button:nth-child(2)'));
                consultBtn.click();
                var _this = this;
                //On met un timeout pour attendre que la page s'affiche
                this.browser.wait(function() {
                    return _this.browser.isElementPresent(webdriver.By.css('[data-focus="header-content"] .key-concept'));
                }, 5000);
                const qsTitle = this.browser.findElement(webdriver.By.css('[data-focus="header-content"] .key-concept'));
                qsTitle.getText().then(txt => {
                    assert.equal(txt, 'Film');
                    done();
                });
            });
        });
    });
};

testGenerator(require('./browsers'));
