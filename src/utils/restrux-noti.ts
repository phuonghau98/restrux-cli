const chalk = require('chalk')

export const restrux_error = (content: string) => {
  return console.log(chalk.red(`\tError: ${content}`))
}

export const restrux_info = (content: string) => {
  return console.log(chalk.blue(`\tInfo: ${content}`))
}

export const restrux_success = (content: string) => {
  return console.log(chalk.green(`\tSuccess: ${content}`))
}