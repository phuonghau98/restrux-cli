import { Command } from '@oclif/command'
import cli from 'cli-ux'

export class GoodbyeCommand extends Command {
    static description = `
    This command say a lovely goodbye
    Thanks for using a cli of Phuong
    `
    static args = [
        { name: 'firstArg' },
    ]
    async run () {
        cli.action.start('Starting Process')
        cli.action.start('Starting Another Process')
    }
}