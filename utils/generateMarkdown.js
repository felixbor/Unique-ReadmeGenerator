// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license)
  { 
    if (license !== 'no license') {
      return `
![badge](https://img.shields.io/badge/license-${license.split('-').join('%20')}-blue)
      `;
    } else {
      return ' ';
    }
}
// Function that returns  license  decsription link for the license section
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  license details:  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!=='no license') {
  return `This application is covered  under the ${license} license.
  ${renderLicenseLink(license)}`;
} else {
  return '';
}
};



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
//console.log("works")
//console.log(data.title)
console.log("Readme created")
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#License)
  * [Contributing](#Contributors)
  * [Tests](#tests)
  * [Questions](#questions)
    
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributors
  ${data.contributing}


  ## Tests
  ${data.tests}
  ## Questions
  Please contact me using the following links:
  [GitHub](https://github.com/${data.github})   

  [Email: ](mailto:${data.email})
  
`

}

module.exports = generateMarkdown;
