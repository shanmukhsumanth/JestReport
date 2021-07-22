const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://13.59.238.74:9000/',
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : '**' 
       },
}, () => {});
