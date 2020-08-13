import coreApp from '@imagina/qsite/_config/master/app'

export default {
  ...coreApp,
  isBackend : false, //Define if project is to admin
  loadBackendPages: true,
  modules: [
    'qlocations',
    'qhelper',
    'qcrud',
    'qquote',
    'qcurrency',
    'quser',
    'qform',
    'qmedia',
    'qsite'
  ],
  qquote:{
    defatultValues:{
      country: {
        "label": "Colombia",
        "value": 297
      }
    }
  }
  //Add more configs, or update from coreAPP
}
