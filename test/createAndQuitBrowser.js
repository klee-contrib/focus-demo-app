var webdriver = require('selenium-webdriver');

function createBrowser(browserName, url, context) {
    if (process.env.SAUCE_USERNAME !== undefined) {
        context.browser = new webdriver.Builder()
        .usingServer('http://'+ process.env.SAUCE_USERNAME+':'+process.env.SAUCE_ACCESS_KEY+'@ondemand.saucelabs.com:80/wd/hub')
        .withCapabilities({
            'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
            build: process.env.TRAVIS_BUILD_NUMBER,
            username: process.env.SAUCE_USERNAME,
            accessKey: process.env.SAUCE_ACCESS_KEY,
            browserName: browserName
        }).build();
    } else {
        context.browser = new webdriver.Builder()
        .withCapabilities({
            browserName: browserName
        }).build();
    }
    return context.browser.get(url);
}
function quitBrowser(context) {
    context.browser.quit();
}

module.exports = {
    createBrowser: createBrowser,
    quitBrowser: quitBrowser
}
