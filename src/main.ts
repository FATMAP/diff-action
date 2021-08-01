import * as core from '@actions/core'
import { run } from './run'

const main = async (): Promise<void> => {
  try {
    const outputs = await run({
      base: core.getInput('base', { required: true }),
      head: core.getInput('head', { required: true }),
      commentHeader: core.getInput('comment-header', { required: true }),
      token: core.getInput('token', { required: true }),
    })
    core.setOutput('different', outputs.different)
  } catch (error) {
    core.setFailed(error.message)
  }
}

main()
