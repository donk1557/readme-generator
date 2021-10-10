// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
let lic;
  for (i = 0; i < data.stack.length; i++){
    switch (data.stack[i]) {
      case 'MIT':
      lic = `![MIT license](https://img.shields.io/badge/License-MIT-blue.svg) (https://lbesson.mit-license.org/)`;
      break;
      case 'GNU GPLv3':
      lic = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg) (http://perso.crans.org/besson/LICENSE.html)`;
      break;
      case 'ISC':
      lic = `![ISC license](https://img.shields.io/badge/License-ISC-green.svg) (http://perso.crans.org/besson/LICENSE.html)`;
      break;
      case 'Apache 2.0':
      lic = `![Npm package license](https://badgen.net/npm/llicense/discord.js) (https://npmjs.com/package/discord.js)`;
      break;
      default:
      lic =``;
    }
  }
  return lic;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  \
## Description
  \
  ${data.description}
  \
## Installation Instructions
  \
  ${data.installation}
  \
## Usage Information
  \
  ${data.usage}
  \
## Contributing Guidelines
  \
  ${data.contribute}
  \
## Test Instructions
  \
  ${data.test}
  \
## License
  \
${renderLicenseBadge(data)}
  \
## Questions
  \
Github username: ${data.gitHubUser}
  \
Github profile link: https://github.com/${data.gitHubUser}
  \
email: ${data.email}\
`;
}

module.exports = generateMarkdown;

