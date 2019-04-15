import Command from '@oclif/command'
import { restrux_error, restrux_info, restrux_success } from '../utils/restrux-noti';
import * as fs from 'fs'
import * as path from 'path'
import cli from 'cli-ux'
import LogoPrint from '../utils/LogoPrint'
import { exec, execSync } from 'child_process'

export default class Init extends Command {
  static args = [
    {
      name: 'pjName'
    }
  ]
  async run () {

    const {args} = this.parse(Init)
    if (args.pjName) {
      await this.createRestruxApp(args.pjName)
    } else {
      restrux_error('Missing name of project')
      restrux_info('Correct usage: restrux init myproject')
    }
  }

  async createRestruxApp (pjName: string) {
    const root = path.resolve(String(process.env.PWD), pjName)
    if(await !fs.existsSync(root)) {
      await cli.action.start(`Initializing ${pjName}`)
      await this.initTemplate(root)
      await cli.action.stop()
      await LogoPrint()
      await restrux_success('Happy coding :)')
    } else {
      restrux_error(`Project named ${pjName} already exists in this directory`)
      restrux_info(`Choose another name or remove current exist directory`)
    }
  }
  
  async initTemplate (root: string) {
    await fs.mkdir(root, () => {})
    await exec(`cd ${root}; npm install webpack`)
  }
}
