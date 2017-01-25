
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
  }

  writing() {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }]).then((answers) => {
      this.fs.copyTpl(
        this.templatePath('LICENSE.md'),
        this.destinationPath('./LICENSE.md'),
        { name: answers.name }
      );
      this.fs.copyTpl(
        this.templatePath('CONTRIBUTING.md'),
        this.destinationPath('./CONTRIBUTING.md'),
        { name: answers.name }
      );
      this.fs.copyTpl(
        this.templatePath('README.md'),
        this.destinationPath('./README.md'),
        { name: answers.name }
      );
    });
  }

};
