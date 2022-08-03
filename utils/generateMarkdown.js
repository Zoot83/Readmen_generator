// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseName =renderLicenseLink(license);

  if(license=='No License'){
    return [];
  }
  return `[![badge: ${licenseName}](https://img.shields.io/badge/License-${licenseName}-lightgreen.svg)](https://opensource.org/licenses/${licenseName})
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let key;
  switch (license) {
    case "Apache 2.0 License":
      key = "Apache_2.0";
      break;
    case "Boost Software License 1.0":
      key = "Boost_1.0";
      break;
    case "BSD 3-Clause License":
      key = "BSD_3--Clause";
      break;
    case "BSD 2-Clause License":
      key = "BSD_2--Clause";
      break;
    case "Eclipse Public License 1.0":
      key = "EPL_1.0";
      break;
    case "GNU GPL v3":
      key = "GPLv3"; 
      break;
    case "GNU GPL v2":
      key = "GPL_v2";
      break;
    case "GNU AGPL v3":
      key = "AGPL_v3"; 
      break;
    case "GNU LGPL v3":
      key = "LGPL_v3";
      break;
    case "The Hippocratic License 2.1":
      key = "Hippocratic_2.1";    
      break;
    case "The Hippocratic License 3.0":
      key = "Hippocratic_3.0";
      break;
    case "IBM Public License Version 1.0":
      key = "IPL_1.0";      
      break;
    case "ISC License (ISC)":
      key = "ISC";
      break;
    case "MIT":
      key = "MIT";        
      break;
    case "Mozilla Public License 2.0":
      key = "MPL_2.0";
      break;
    case "Open Database License (ODbL)":
      key = "ODbL";         
      break;
    case "Public Domain Dedication and License":
      key = "PDDL";
      break;
    case "Perl":
      key = "Perl";            
      break;
    case "Artistic License 2.0":
      key = "Artistic_2.0";
      break;
    case "The Do What the Fuck You Want to Public License":
      key = "WTFPL";             
      break;
    case "SIL Open Font":
      key = "OFL_1.1";             
      break;                                                                                                                                   
    default:
      key == 'No license'
      break;
  }
  return key;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
let licenseName = renderLicenseLink(license);
  if(licenseName=='No License'){
    return [];
  }
  return `[![License: ${licenseName}](https://img.shields.io/badge/License-${licenseName}-lightgreen.svg)](https://opensource.org/licenses/${licenseName})
  <br />
  This application is covered by ${licenseName}. <br /> 
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}


## Description
 ${data.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
 ${data.instructions}
## Usage
 ${data.usage}

## License
${renderLicenseSection(data.license)}


## Contributing
 ${data.contributing}

## Tests
 ${data.tests}
 
## Questions
 ${data.questions}<br />
<br />
Find me on GitHub: [${data.username}](https://github.com/${data.username})<br />
<br />
 Email me with any questions: ${data.email}<br /><br />
_This README was generated with by [README-generator](https://github.com/Zoot83/README-generator) _
`;
}

module.exports = generateMarkdown;
