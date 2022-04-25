
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}
  https://github.com/${data.username}/${data.title}
  # Table of Contents
  -[Project Description](##Description)

  -[Installation Instructions](#Installation)

  -[Usage](#Usage)

  -[License Used](#License)

  -[Contributing](#Contributing)

  -[Questions?](#Questions)
    
  # Description:
  ${data.description}

  # Installation
   To run this program you must have the following dependencies: ${data.installation}

  # Usage 
  this app is used ${data.usageInfo}

  # License 
  this app runs and is protected under the ${data.license} license 
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

  # Contributing
  To contribute please follow these guidelines: ${data.contribute}

  # Questions
  If you have any questions or concerns please reach out to : ${data.userEmail}

`;
}

module.exports = generateMarkdown;
