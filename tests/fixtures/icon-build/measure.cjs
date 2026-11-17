const fs = require('node:fs')
const path = require('node:path')
const directory = process.env.WATERCOLOR_RSS_DIRECTORY
if (directory) {
  fs.mkdirSync(directory, { recursive: true })
  const file = path.join(directory, `${process.pid}.json`)
  const save = () => fs.writeFileSync(file, JSON.stringify({
    pid: process.pid,
    peakMiB: process.resourceUsage().maxRSS / 1024,
  }))
  save()
  const timer = setInterval(save, 250)
  timer.unref()
  process.on('exit', save)
}
