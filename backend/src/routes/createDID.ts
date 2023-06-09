import { createDID } from '../iota-function/createDid'
import { addVerificationMethod } from '../iota-function/verificationMethods'
const createDIDRoute = async (req: any, res: any) => {
  console.log(req.body)
  const body = req.body
  const userName = body.userName
  const password = body.password
  console.log(userName, password)
  const didData = await createDID(userName, password)
  // console.log(didData)
  const message = await addVerificationMethod(userName, password, 'key-1')
  console.log(message)
  res.send(didData)
}
export default createDIDRoute
