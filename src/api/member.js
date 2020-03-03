import { request } from '../../utils/request'

export async function getMembers () {
  const member = (await request().get('/members')).data
  return member
}
