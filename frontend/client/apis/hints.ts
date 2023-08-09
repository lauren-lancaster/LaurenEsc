import request from 'superagent'

export async function getSingleHint(id: number) {
  const res = await request.get(`/api/v1/hints/${id}`)
  return res.body
}
