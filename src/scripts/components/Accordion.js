import React from 'react';

import './Accordion.scss';

export default class Accordion extends React.Component {
    /**
     * Periodic table content.
     * @constructor
     * @param {object} props Component properties.
     * @param {object} props.elementData element data
     */
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    /**
     * Render.
     * @return {object} Render object.
     */
    render() {

        const onClick = () => {
            this.setState({ isActive: !this.state.isActive })
        }

        return (
            <div className="periodic-element-accordion--item">
                <div className="periodic-element-accordion--item-title" onClick={onClick}>
                    {this.props.elementData.elements[0].name}
                </div>
                {this.state.isActive &&
                    <div className="periodic-element-accordion--item-content">
                        <p className="periodic-element-accordion--item-content-piece" >{this.props.elementData.elements[0].number}</p>
                        <h2 className="periodic-element-accordion--item-content-piece" >{this.props.elementData.elements[0].symbol}</h2>
                        <h3 className="periodic-element-accordion--item-content-piece" >{this.props.elementData.elements[0].name}</h3>
                        <p className="periodic-element-accordion--item-content-piece" >{this.props.elementData.elements[0].chemicalGroupBlock}</p>
                        <p className="periodic-element-accordion--item-content-piece" >Standard State: {this.props.elementData.elements[0].standardState}</p>
                        <p className="periodic-element-accordion--item-content-piece" >Atomic Mass: {this.props.elementData.elements[0].atomicMass} u</p>
                        <p className="periodic-element-accordion--item-content-piece" >Year Discovered: {this.props.elementData.elements[0].yearDiscovered}</p>
                    </div>
                }
            </div>
        );
    }
}

