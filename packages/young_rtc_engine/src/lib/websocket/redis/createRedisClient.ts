import { promisify } from 'util'
import redis from 'redis'

const createRedisClient = () => {
  return redis.createClient()
}

export const coreRedisClient = createRedisClient()
export const globalSubscriber = createRedisClient()

const publishAsync = promisify(coreRedisClient.publish).bind(coreRedisClient)
export const publishJSON = (channel: string, json: any) =>
  publishAsync(channel, JSON.stringify(json))
