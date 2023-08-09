import request from 'superagent'

export async function getSingleQuestion() {
  const res = await request.get(`/api/v1/questions`)
  return res.body
}
