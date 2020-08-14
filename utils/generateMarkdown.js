// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


Table of contents
=================

<!--ts-->
   * [Description](#description)
   * [Table of contents](#table-of-contents)
   * [Installation](#installation)
   * [Usage](#usage)
      * [STDIN](#stdin)
      * [Local files](#local-files)
      * [Remote files](#remote-files)
      * [Multiple files](#multiple-files)
      * [Combo](#combo)
      * [Auto insert and update TOC](#auto-insert-and-update-toc)
      * [GitHub token](#github-token)
   * [Tests](#tests)
   * [Dependency](#dependency)
<!--te-->

Description
===========
  ${data.description}



   

`;
}
// ${renderBadge(data.license)}
function renderBadge(license) {
  //if license === this than return badge for that license
}

module.exports = generateMarkdown;
