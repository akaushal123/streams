import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {

//using context type by CONSUMER prop

    renderSubmit(value){
        return value === 'english' ? 'Submit' : 'स्वीकार';
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) =>
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(value) => this.renderSubmit(value)}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>

        );
    }
}

export default Button;