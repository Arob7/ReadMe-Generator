// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.inputBadgeCode}
  
Table of contents
=================

* [Table of contents](#table-of-contents)
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contribution](#contribution)
   * [Tests](#test)
  * [Questions](#questions)
  

Description
===========

${data.description}

Installation
===========
${data.install}

License
===========
${data.license}

Usage
===========
${data.usageInformation}

Contribution
===========
${data.contribution}

Test
===========
${data.test}

Questions
===========
Please reach me at any of the contacts below if you have any questions:

Github: ${data.username} (https://github.com/Arob7)

Email: ${data.email}

`;
}
// ${renderBadge(data.license)}
// function renderBadge(license) {
//if license === this than return badge for that license
// }

module.exports = generateMarkdown;
