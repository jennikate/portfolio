import React, { Component } from 'react';
import PropTypes from 'prop-types';

//https://alligator.io/react/react-accordion-component/

class AccordionSection extends Component {

  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;



    return (
      <div className='accordion-tab'
        style={{
          background: isOpen ? '#FFFFFF' : '#EFF4F5',
        }}
      >
        <div onClick={onClick} className='accordion-label flex-horizontal'>
          <div>
            {!isOpen && <span className='creature'>&nbsp;</span>}
            {isOpen && <span className='creature open'>&nbsp;</span>}
          </div>
          {label}
        </div>
        {isOpen && (
          <div>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;