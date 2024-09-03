/* eslint-disable */

import fs from 'fs-extra'
import childProcess from 'child_process'

(async () => {
  try {
    await remove('./dist/')
    await exec('tsc --build tsconfig.prod.json', './')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()

function remove(loc: string): Promise<void> {
  return new Promise((res, rej) => {
    return fs.remove(loc, (err) => {
      return (!!err ? rej(err) : res())
    })
  })
}

function exec(cmd: string, loc: string): Promise<void> {
  return new Promise((res, rej) => {
    return childProcess.exec(cmd, {cwd: loc}, (err, stdout, stderr) => {
      if (!!stdout) {
        console.log(stdout)
      }
      if (!!stderr) {
        console.log(stderr)
      }
      return (!!err ? rej(err) : res())
    })
  })
}
