import createDIDRoute from './createDID'
import checkVPRoute from './checkVP'
import loadDIDRoute from './loadDID'
import revokeVCRoute from './Revo'
import VCRoute from './VC'
import VPRoute from './VP'
const wrap =
  (fn: any) =>
  (...args: any) =>
    fn(...args).catch(args[2])

function main(app: any) {
  app.post('/api/createDID', wrap(createDIDRoute))
  app.get('/api/checkVP', wrap(checkVPRoute))
  app.get('/api/loadDID', wrap(loadDIDRoute))
  app.post('/api/revokeVC', wrap(revokeVCRoute))
  app.get('/api/VC', wrap(VCRoute))
  app.get('/api/VP', wrap(VPRoute))
}

export default main
