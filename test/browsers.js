const BROWSERS = [
  {name: 'chrome', versions: [45, 46, 47]},
  {name: 'firefox', versions: [43, 44]},
  {name: 'internet explorer', versions: [10, 11]}
];

module.exports = BROWSERS.reduce(function(res, current) {
    return [].concat(res, current.versions.reduce(function(r, c) {
        return [].concat(r, [{ name: current.name, version: c }]);
    }, []));
}, []);
