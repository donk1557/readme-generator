// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  for (i = 0; i < license.stack; i++){
    switch (i) {
      case 'MIT':
        [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/);
        break;
      case 'GNU GPLv3':
        [![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html);
        break;
      case 'ISC':
        [![ISC license](https://img.shields.io/badge/License-ISC-green.svg)](http://perso.crans.org/besson/LICENSE.html);
        break;
      case 'Apache 2.0':
        [![Npm package license](https://badgen.net/npm/llicense/discord.js)](https://npmjs.com/package/discord.js);
        break;
      default:
        console.log('');
      }
    }
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
        ## Description
        ${data.description}
        ## Installation Instructions
        ${data.installation}
        ## Usage Information
        ${data.usage}
        ## Contributing Guidelines
        ${data.contribute}
        ## Test Instructions
        ${data.test}
        ## License
        ${data.stack}
        ##Questions
        Github username: ${data.gitHubUser}
        Github profile link: https://github.com/${data.gitHubUser}
        email: ${data.email}
`;
}

module.exports = generateMarkdown;
