// Classes
import React from 'react';

// Styles 
import './ColorLegend.scss';

export default class ColorLegend extends React.Component {

    /**
     * @constructor
     * @param {object} props Component properties. 
     */

    constructor(props) {
        super(props);
    }

    /**
* Render.
* @return {object} Render object.
*/
    render() {
        return (
            <div className="h5p-periodic-table-legend-content">
                <h2>Table Legend</h2>
                <ul>
                    <li><span id="bg-color-nonmetal">&nbsp;&nbsp;&nbsp;</span> Nonmetal</li>
                    <li><span id="bg-color-alkali-metal">&nbsp;&nbsp;&nbsp;</span> Alkali Metal</li>
                    <li><span id="bg-color-alkaline-earth-metal">&nbsp;&nbsp;&nbsp;</span> Alkaline Earth Metal</li>
                    <li><span id="bg-color-transition-metal">&nbsp;&nbsp;&nbsp;</span> Transition Metal</li>
                    <li><span id="bg-color-post-transition-metal">&nbsp;&nbsp;&nbsp;</span> Post-Transition Metal</li>
                    <li><span id="bg-color-metalloid">&nbsp;&nbsp;&nbsp;</span> Metalloid</li>
                    <li><span id="bg-color-noble-gas">&nbsp;&nbsp;&nbsp;</span> Noble Gas</li>
                    <li><span id="bg-color-halogen">&nbsp;&nbsp;&nbsp;</span> Halogen</li>
                    <li><span id="bg-color-lanthanide">&nbsp;&nbsp;&nbsp;</span> Lanthanide</li>
                    <li><span id="bg-color-actinide">&nbsp;&nbsp;&nbsp;</span> Actinide</li>
                </ul>
            </div>
        )
    }

}