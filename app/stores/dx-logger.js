import AppDispatcher from 'focus-core/dispatcher';
import CoreStore from 'focus-core/store/CoreStore';

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
          Object.keys(CoreStore.prototype._instances).reduce((res, current) => {
            console.log(CoreStore.prototype._instances[current].constructor.name, CoreStore.prototype._instances[current].getValue());
          }, {});
          console.groupEnd();
          console.groupEnd();
        });
  }
}


export default new DxStore();
