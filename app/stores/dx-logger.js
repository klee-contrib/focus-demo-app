import AppDispatcher from 'focus-core/dispatcher';
class DxStore  {
  constructor(){
    this.registerDispatcher();
  }
  registerDispatcher(){
        const currentStore = this;
        this.dispatch = AppDispatcher.register(transferInfo => {
          console.groupCollapsed('DX_STORES');
          console.log('dispatch', transferInfo, 'stores')
          console.groupCollapsed('STORES_ VALUES');
          Object.keys(window._stores).reduce((res, current) => {
            console.log(window._stores[current].constructor.name, window._stores[current].getValue());
          }, {});
          console.groupEnd();
          console.groupEnd();
        });
  }
}


export default new DxStore();
