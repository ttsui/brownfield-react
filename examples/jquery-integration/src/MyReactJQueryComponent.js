import React from 'react';
import $ from 'jquery';
import 'tooltipster';
import 'tooltipster/dist/css/tooltipster.bundle.css'
import PropTypes from 'prop-types';

class MyReactJQueryComponent extends React.Component {

  componentDidMount() {
    const $tooltip = $(this._tooltipEl);

    $tooltip.tooltipster({
      contentCloning: true
    });
  }

  componentWillUnmount() {
    const $tooltip = $(this._tooltipEl);

    $tooltip.tooltipster('destroy');
  }

  render() {
    return (
       <div>
        <div style={{ display: 'none' }}>
          <span id="tooltip_content">
              <strong>{ this.props.tooltipCopy }</strong>
          </span>
        </div>

        <div ref={ el => this._tooltipEl = el }
             style={{ margin: '10em' }}
             data-tooltip-content="#tooltip_content" >
            Hover over this text to display tooltip.
        </div>
      </div>
    );
  }
}
MyReactJQueryComponent.propTypes = {
  tooltipCopy: PropTypes.string
};
MyReactJQueryComponent.defaultProps = {
  tooltipCopy: ''
};

export default MyReactJQueryComponent;
