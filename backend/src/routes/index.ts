import createDIDRoute from './createDID'
const wrap =
  (fn: any) =>
  (...args: any) =>
    fn(...args).catch(args[2])

function main(app: any) {
  app.post('/api/createDID', wrap(createDIDRoute))
}

export default main
