// Classes
import React from 'react';
import PropTypes, { number } from 'prop-types';

// Styles
import './ElementCard.scss';

export default class ElementCard extends React.Component {
  /**
   * Single card inside a periodic table.
   * @constructor
   * @param {object} props Component properties.
   * @param {object} props.params Element parameters.
   * @param {number} props.params.number Element number.
   * @param {string} props.params.symbol Element symbol.
   * @param {string} props.params.name Element name.
   * @param {string} props.params.chemicalGroupBlock Element group block.
   * @param {function} props.onClicked Callback for card clicked.
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render.
   * @return {object} Render object.
   */
  render() {
    const className = `h5p-periodic-table-element-card h5p-periodic-table-${this.props.params.chemicalGroupBlock.toLowerCase().replace(/\s/g, '-')}`;

    return (
      <button
        className={className}
        onClick={() => {
          console.log(this.props.params.name)
        }}
      >
        <div className='h5p-periodic-table-element-number'>
          {this.props.params.number}
        </div>
        <div className='h5p-periodic-table-element-symbol'>
          {this.props.params.symbol}
        </div>
      </button>
    );
  }
}

// PropTypes
ElementCard.propTypes = {
  params: PropTypes.object,
  onClicked: PropTypes.func
};
