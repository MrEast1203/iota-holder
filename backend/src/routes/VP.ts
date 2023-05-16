import { createVerifiablePresentation } from '../iota-function/verifiablePresentation'
const VPRoute = async (req: any, res: any) => {
  const data = req.query
  const holderName = data.holderName
  const holderPassword = data.holderPassword
  const credentialFile = data.credentialFile
  const verificationMethodFragment = data.verificationMethodFragment
  const challenge = data.challenge
  const message = await createVerifiablePresentation(
    holderName,
    holderPassword,
    credentialFile,
    verificationMethodFragment,
    challenge
  )
  console.log(message)
  res.send(message)
}
export default VPRoute
