import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColourContext from '../contexts/ColourContext';

class Button extends React.Component {

    render() {
        return (
            <ColourContext.Consumer>
                {(colour) => <button className={`ui button ${colour}`}>
                    <LanguageContext.Consumer>
                        {(value) => value.language === 'english' ? 'Submit' : 'Voorlagen'}
                    </LanguageContext.Consumer>
                </button>}
            </ColourContext.Consumer>
        );
    }
}

export default Button;