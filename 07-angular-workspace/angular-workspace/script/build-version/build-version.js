const Version = (() => {
  let _instance = null;

  const _buildVersionInformation = () => {
    const path = require('path');
    const fs = require('fs');
    const packageJson = require('../../projects/work-library/package');

    console.log('\nRunning pre-build tasks to ' + packageJson.name);

    const envConstantsPath = path.join(__dirname, './../../projects/work-library/src/lib/generated/version.constants.generated.ts');
    console.log(envConstantsPath,'test')
    const constantContent = `/**
 * @author Jhona
 * Note: This content is automatically updated when the "npm run work-library:package" command is executed
 */\n
export const VERSION = '${packageJson.version}';
export const NAME = '${packageJson.name}';
export const UPDATE_DATE = '${new Date().toLocaleDateString()}';
export const DESCRIPTION = '©Made With <3';
export const EMAIL = 'jhonatansotogz@gmail.com';\n`;

    const envConstStream = fs.createWriteStream(envConstantsPath);

    envConstStream.once('open', function (fd) {
      envConstStream.write(constantContent);
      envConstStream.end();
    });
  };

  const SingletonClass = () => {
    return {
      build: _buildVersionInformation
    }
  };

  return {
    getInstance: () => {
      if (_instance === null) {
        _instance = SingletonClass();
        _instance.constructor = null;
      }
      return _instance;
    }
  }
})();

module.exports = Version;

