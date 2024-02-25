import Alpine from './alpine.esm.js'
import persist from './alpine.persist.esm.js'
import Icon from './components/icon.js'
import Actor from './components/actor.js'
import Product from './components/product.js'
import UseCases from './use-cases.json' assert { type: 'json' };

const sleep = ms => new Promise(r => setTimeout(r, ms));

Alpine.plugin(persist)
Alpine.data('Icon', Icon)
Alpine.data('Actor', Actor)
Alpine.data('Product', Product)
Alpine.data('App', () => ({
  cases:[],
  ncols:1,
  currentCaseFilter:Alpine.$persist('person'),
  caseFilters: {
    all: (i) => true,
    person: (i) => i.actor.includes('person:'),
    doctor: (i) => i.actor.includes('doctor:'),
    support: (i) => i.actor.includes('support:'),
    home: (i) => i.actor.includes('home-solid:'),
    robot: (i) => i.actor.includes('robot:'),
  },
  counters: {},
  menus: {
    caseFilters: [
      ['person', 'Paciente'],
      ['support','Agente'],
      ['home',   'Gerente'],
      ['doctor', 'Especialista'],
      ['robot',  'Servidor'],
      ['all',    'Todos'],
    ]
  },
  showing:true,
  init() {
    //console.log('APP INIT', UseCases)
    this.cases = UseCases.cases
    this.initCounters()
  },
  initCounters() {
    this.ncols = Math.max(...this.cases.map(c => c.steps.length))
    this.counters = {
      all: this.cases.length,
      person: 0,
      support: 0,
      home: 0,
      doctor: 0,
      robot: 0,
    }
    this.cases.forEach(c => {
      if(c.actor.includes('person:')) this.counters.person++;
      if(c.actor.includes('support:')) this.counters.support++;
      if(c.actor.includes('home-solid:')) this.counters.home++;
      if(c.actor.includes('doctor:')) this.counters.doctor++;
      if(c.actor.includes('robot:')) this.counters.robot++;
    })
  },
  async setCurrentCaseFilter(filter) {
    this.showing = false
    await sleep(200)
    this.currentCaseFilter = filter
    this.showing = true
  },
}))
Alpine.start()