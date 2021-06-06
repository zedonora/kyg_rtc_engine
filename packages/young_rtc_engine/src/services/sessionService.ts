import prisma from '../lib/websocket/prisma'

const sessionService = {
  async integrate(sessionId: number, userJSONString: any) {
    const parsed = JSON.parse(userJSONString)
    if (parsed.id === undefined) {
      const e = new Error('There is no id field in user json')
      throw e
    }
    // 사용자 존재 여부
    let user = await prisma.user.findUnique(parsed.id)
    // 있으면 업데이트하고, 없으면 새로 생성
    if (user) {
      await prisma.user.update({
        where: {
          id: parsed.id,
        },
        data: {
          json: userJSONString,
        },
      })
    } else {
      user = await prisma.user.create({
        data: {
          id: parsed.id,
          json: userJSONString,
        },
      })
    }
    // 세션 만들 때 사용자 연동
  },
}

export default sessionService
