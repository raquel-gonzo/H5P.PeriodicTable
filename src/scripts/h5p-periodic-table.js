// Classes
import React from 'react';
import ReactDOM from 'react-dom';

// Compontents
import Content from './components/Content';

// Elements data
import Elements from '../assets/elements.json';

export default class PeriodicTable extends H5P.EventDispatcher {
  /**
   * @constructor
   * @param {object} params Parameters passed by the editor.
   * @param {number} contentId Content's id.
   * @param {object} [extras] Saved state, metadata, etc.
   */
  constructor(params, contentId, extras = {}) {
    super();

    /*
     * Not sure if params need to hold anything right now, but they could
     * e.g. be used for setting the view (grid, list, etc.) or for displaying
     * a subset of elements only (all, metals, halogens, etc.).
     *
     * There's no need to put question related things in semantics and use them
     * here unless something special is needed. We can always add the periodic
     * table to H5P.Column and combine it with all kinds of questions that way.
     */

    /**
     * Attach library to wrapper.
     * @param {jQuery} $wrapper Content's container.
     */
    this.attach = function ($wrapper) {
      const h5pContainer = $wrapper.get(0);
      h5pContainer.classList.add('h5p-periodic-table');

      this.content = ReactDOM.render(
        (
          <Content
            elements = {Elements.elements}
          />
        ),
        h5pContainer
      );
    };
  }
}
