import Command from '@oclif/command'
import cli from 'cli-ux'
// import * as chalk from 'chalk'
const chalk = require('chalk')

export default class Init extends Command {
  static args = [
    { name: 'dirName' }
  ]
  async run () {
    const { args } = this.parse(Init)
    if (!args.dirName) {
      this.log(chalk.red('Error:'), ' Name of project is missing.')
      this.log(chalk.blue('Usage:'), 'restrux init myproject')
    }
    else {
      cli.action.start(`Initializing awesome ${args.dirName} project`)
      setTimeout(() => {
        cli.action.stop()
        this.log(chalk.green('Happy hacking :)'))
      }, 3000)
    }
  }
}