import React, {Component} from 'react';
import Dropdown from 'focus-components/components/dropdown';
import IconDropdown from 'focus-components/components/icon-dropdown';

class ValidationSelectAction extends Component {


    render() {

        const operationList = [
            {
                label: "Action_a", action: function () {
                alert("Action a");
            }, style: "class"
            },
            {
                label: "Action_b", action: function () {
                alert("Action b");
            }
            },
            {
                label: "Action_c", action: function () {
                alert("Action c");
            }
            },
            {
                label: "Action_d", action: function () {
                alert("Action d");
            }
            },
            {
                label: "Action_e", action: function () {
                alert("Action e");
            }
            },
        ];
        const style = {
            display: "block"
        }
        //  <div style={style}>
        //  <div className="header-actions">
        return (

            <div>

                    <IconDropdown operationList={operationList}  shape="raised"
                              openDirection="top-left"/>
                </div>

        );
    }

}

ValidationSelectAction.displayName = 'ValidationSelectAction';

export default ValidationSelectAction;