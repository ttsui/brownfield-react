import React from 'react';
import $ from 'jquery';
import 'tooltipster';
import 'tooltipster/dist/css/tooltipster.bundle.css'
import PropTypes from 'prop-types';

class MyReactJQueryComponent extends React.Component {

  componentDidMount() {
    const $tooltip = $(this._tooltipEl);

    $tooltip.tooltipster({
      interactive: true,
      content: this.props.tooltipCopy
    });
  }

  componentWillReceiveProps(nextProps) {
    const $tooltip = $(this._tooltipEl);
    $tooltip.tooltipster('content', nextProps.tooltipCopy);
  }

  componentWillUnmount() {
    const $tooltip = $(this._tooltipEl);

    $tooltip.tooltipster('destroy');
  }

  render() {
    return (
      <div ref={ el => this._tooltipEl = el }
           style={{ margin: '10em' }}>
          Hover over this text to display tooltip.
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
