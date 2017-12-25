const services = [
  require('dogstack-agents/service'),
  require('./dogs/service'),
  require('./garden/service')
]

export default {
  services
}
