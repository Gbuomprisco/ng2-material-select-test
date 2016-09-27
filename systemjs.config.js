/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */

(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': '/app', // 'dist',
    '@angular': '/node_modules/@angular',
    'angular2-in-memory-web-api': '/node_modules/angular2-in-memory-web-api',
    'rxjs': '/node_modules/rxjs',
    'reflect-metadata': '/node_modules/reflect-metadata',
    'ng2-material-select': '/node_modules/ng2-material-select',
    'traceur': '/node_modules/traceur',
    'typescript': '/node_modules/typescript'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main', defaultExtension: false },
    'rxjs': { defaultExtension: 'js' },
    'reflect-metadata': { defaultExtension: 'js' },
    'Ng2SelectModule': { defaultExtension: 'js' },
    'ng2-material-select': { main: 'dist/index.js', defaultExtension: 'js' },
    'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
    'moment': { main: 'moment.js', defaultExtension: 'js' },
    'traceur':  { main: 'bin/traceur.js', defaultExtension: 'js' },
    'typescript':  { main: 'lib/typescript.js', defaultExtension: 'js' }

  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'upgrade'
  ];


  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  };
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages,
    defaultExtension: 'ts',
    transpiler: 'typescript'
  }
  System.config(config);
})(this);

