import Command from '@oclif/command'
import { restrux_error, restrux_info, restrux_success } from '../utils/restrux-noti';
import * as fs from 'fs'
import * as path from 'path'
import cli from 'cli-ux'

export default class Init extends Command {
  static args = [
    {
      name: 'pjName'
    }
  ]
  async run () {
    const {args} = this.parse(Init)
    if (args.pjName) {
      if(!fs.existsSync(path.resolve(String(process.env.PWD), args.pjName))) {
        await cli.action.start(`Initializing ${args.pjName}`)
        setTimeout(async () => {
          cli.action.stop()
          console.log(`
           ____  _____ ____ _____ ____  _   ___  __
          |  _ \\| ____/ ___|_   _|  _ \\| | | \\ \\/ /
          | |_) |  _| \\___ \\ | | | |_) | | | |\\  / 
          |  _ <| |___ ___) || | |  _ <| |_| |/  \\
          |_| \\_\\_____|____/ |_| |_| \\_\\\\___//_/\\_\\
                                                   `)
          restrux_success('Happy coding :)')
        }, 3000)
      } else {
        restrux_error(`Project named ${args.pjName} already exists in this directory`)
        restrux_info(`Choose another name or remove current exist directory`)
      }
    } else {
      restrux_error('Missing name of project')
      restrux_info('Correct usage: restrux init myproject')
    }
  }
}
