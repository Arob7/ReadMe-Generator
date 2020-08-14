// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
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

`;
}
// ${renderBadge(data.license)}
function renderBadge(license) {
  //if license === this than return badge for that license
}

module.exports = generateMarkdown;
