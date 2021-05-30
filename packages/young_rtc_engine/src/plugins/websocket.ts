import fp from 'fastify-plugin'
import fastifyWebsocket from 'fastify-websocket'

/**
 * apply websocket to server
 */
export default fp(async (fastify, opt) => {
  fastify.register(fastifyWebsocket)
})
