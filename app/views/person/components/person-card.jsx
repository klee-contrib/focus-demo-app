//libraries
import React, {PropTypes} from 'react';
import {navigate} from 'focus-core/history';
import {Link} from 'react-router';

//web components
import Button from 'focus-components/components/button';

function PersonCard({onClickPreview, person}) {
    const {code, leadActor, linked, name, photoURL, role, existsInBdd} = person;
    const showButtons = false !== existsInBdd;
    return (
        <div className='mdl-card mdl-shadow--4dp person-card' data-demo='material-card'>
            <div className='visuel'>
                <div>
                    {photoURL && <img src={photoURL} title='Picture' alt='Picture' />}
                </div>
                {!photoURL &&
                    <span className="mdl-card__menu">
                        <Button shape='icon' label='view.person.action.add-photo' icon='add_a_photo' handleOnClick={() => console.log('click on person card add photo')} />
                    </span>
                }
            </div>
            <div className='mdl-card__supporting-text'>
                <div className='card-info' data-demo="person-identity">
                    <div className='card-info--level1'>{name}</div>
                    <div className='card-info--level2'>{role}</div>
                </div>
            </div>
            { showButtons &&
              <div className='mdl-card__actions mdl-card--border'>
                  {onClickPreview && <Button shape={null} label='view.person.action.preview' handleOnClick={() => onClickPreview(+code)} />}
                      <Button shape={null} label='view.person.action.consult.sheet' handleOnClick={() => {navigate(`/persons/${code}`)}} />
              </div>
            }
        </div>
    );
};

PersonCard.displayName = 'PersonCard';
PersonCard.propTypes = {
    onClickPreview: PropTypes.func,
    person: PropTypes.object.isRequired
};
export default PersonCard;
