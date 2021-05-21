// Classes
import React from 'react';
import PropTypes from 'prop-types';

// Compontents
import DemoView from './DemoView';

// Styles
import './Content.scss';

export default class Content extends React.Component {
  /**
   * Periodic table content.
   * Could for instance get a popup that could show detailed element information
   * and would be opened by a callback from one of the element cards passing the
   * element number.
   * @constructor
   * @param {object} props Component properties.
   * @param {object[]} props.elements Elements parameters.
   */
  constructor(props) {
    super(props);
  }

  /**
   * Handle click on ElementCard.
   * @param {number} number Number of element card that was clicked.
   */
  handleElementCardClick(number) {
    // Could for instance be used to open a popup.
  }

  /**
   * Render.
   * @return {object} Render object.
   */
  render() {
    /*
     * Depending on the use case, there could be different views here
     * depending on the props given, e.g. the full table using a CSS grid,
     * a flexbox view, whatever. Just some demo view for now ...
     */
    return (
      <div className='h5p-periodic-table-content'>
        <DemoView />
      </div>
    );
  }
}

// PropTypes
Content.propTypes = {
  elements: PropTypes.array,
};
