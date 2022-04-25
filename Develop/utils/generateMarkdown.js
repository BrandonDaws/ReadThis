// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.username}
  # Table of Contents
  -[Project Description](##Description)
  -[Installation Instructions](##Installation)
  -[Usage](##Usage)
  -[License Used](##License)
  -[Contributing](##Contributing)
  -[Questions?](##Questions)
    
  # Description:
  ${data.description}

  # Installation
   To run this program you must have the following dependencies: ${data.installation}

  # Usage 
  this app is used ${data.usageInfo}

  # License 
  this app runs and is protected under the ${data.license} license ![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)

  # Contributing
  To contribute please follow these guidelines: ${data.contribute}

  # Questions
  If you have any questions or concerns please reach out to : ${data.userEmail}

`;
}

module.exports = generateMarkdown;
