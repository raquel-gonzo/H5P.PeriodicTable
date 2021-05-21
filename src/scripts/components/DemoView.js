// Classes
import React from 'react';
import PropTypes from 'prop-types';

// Compontents
// import ElementCard from './ElementCard';
import ColorLegend from './ColorLegend';
import Accordion from './Accordion';

// React Zoom Pan Pinch
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// Elements Data
import ElementData from '../../assets/elements.json';

// Image
import TableImage from "../../assets/images/periodic_table.png";

// Styles
import './DemoView.scss';

export default class DemoView extends React.Component {
  /**
   * Periodic table content.
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
      <div className='h5p-periodic-table-demo-view'>

        <div className="h5p-periodic-table-legend">
          <ColorLegend />
        </div>

        <div className="h5p-image-zoom-wrapper" >
          <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200} >
            {({ zoomIn, zoomOut }) => (
              <>
                <TransformComponent>
                  <img
                    className="h5p-periodic-table-image"
                    src={TableImage}
                    alt="An image of the periodic table with each element showing their atomic number, symbol, element name, and chemical group block."
                  />
                </TransformComponent>
                <div className="zoom-btn-wrapper">
                  <button className="zoom-btn" onClick={zoomIn}>zoom in</button>
                  <button className="zoom-btn" onClick={zoomOut}>zoom out</button>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>

        <div className="periodic-element-accordion" >
          <Accordion elementData={ElementData} />
        </div>

      </div>
    );
  }
}

// PropTypes
DemoView.propTypes = {
  elements: PropTypes.array,
  onElementCardClicked: PropTypes.func
};
