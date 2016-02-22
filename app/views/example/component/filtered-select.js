import React, {PropTypes} from 'react'
import Select from 'focus-components/components/input/select';

class FilteredSelect extends Component {
    constructor(props){
      this._syncListWithService.bind(this);
    }
    _syncListWithService(criteria){
      const {service} = this.props;
      if(criteria){
        service(criteria).then(list => this.setState({values: list}));
      }
    }
    componentWillMount(){
      this._syncListWithService(this.props.criteria);
    }
    componentWillReceiveProps(newProps){
      newProps && this._syncListWithService(newProps.criteria);
    }
    render(){
      const {values} = this.state;
      return <Select {...this.props} values={values} />
    }
}

FilteredSelect.displayName = 'FilteredSelect';
FilteredSelect.propTypes = {
  service: PropTypes.func.isRequired,
  criteria:PropTypes.object
}
export default FilteredSelect;
