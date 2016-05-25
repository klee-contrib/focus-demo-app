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
                var _this = this;
                //On attend que la page d'accueil se charge avant de cliquer
                this.browser.wait(function() {
                    return _this.browser.isElementPresent(webdriver.By.css('[data-demo="concept-card-list"] button:nth-child(2)'));
                }, 5000);
                const consultBtn = this.browser.findElement(webdriver.By.css('[data-demo="concept-card-list"] button:nth-child(2)'));
                consultBtn.click();
                //On met un timeout pour attendre que la page de detail s'affiche
                this.browser.wait(function() {
                    return _this.browser.isElementPresent(webdriver.By.css('[data-focus="header-content"] .key-concept'));
                }, 5000);
                const qsTitle = this.browser.findElement(webdriver.By.css('[data-focus="header-content"] .key-concept'));
                qsTitle.getText().then(txt => {
                    assert.equal(txt, 'FILM');
                    done();
                });
            });
            it('Check edit/consult mode', done => {
                var _this = this;
                //On attend que les elements se chargent avant de cliquer
                this.browser.wait(function() {
                    return _this.browser.isElementPresent(webdriver.By.css('form .actions button[alt="Modifier"]'));
                }, 5000);
                //On verifie qu'il n'y a aucun champ input en mode consult
                var noInput;
                try {
                    this.browser.findElement(webdriver.By.css('form input'));
                    noInput = false;
                    console.info('je susisisi  iicicici');
                }catch (e) {
                    noInput = true;
                    console.info('je susisisi  iicicici erreur');
                 }
                assert.equal(noInput, true);
                const editButton = this.browser.findElement(webdriver.By.css('form .actions button[alt="Modifier"]'));
                editButton.click();
                //timeoutOn attend que le formulaire passe en mode edit
                this.browser.wait(function() {
                    return _this.browser.isElementPresent(webdriver.By.css('form .actions button[alt="Abandonner"]'));
                }, 5000);
                //On verifie qu'il y a au moins un champ input en mode edit
                try {
                    this.browser.findElement(webdriver.By.css('form input'));
                    noInput = false;
                } catch (e) {
                    noInput = true;
                }
                assert.equal(noInput, false);
                done();
            });
        });
    });
};

testGenerator(require('./browsers'));
