import fs from 'fs'
import path from 'path'

type YgRTCConfig = {
  allowAnonymous: boolean
}

let config: YgRTCConfig | null = null

async function loadConfig() {
  const configDir = path.resolve(__dirname, '../ygRtc.config.json')
  const file = fs.readFileSync(configDir, 'utf8')
  config = JSON.parse(file)
}

loadConfig()

export default config!
