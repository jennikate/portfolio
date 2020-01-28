import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AccordionSection from './AccordionSection'

//https://alligator.io/react/react-accordion-component/

class Accordion extends Component {

  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  };

  constructor(props) {
    super(props);

    const openSections = {};

    this.state = { openSections };
  }

  onClick = label => {
    const {
      state: { openSections },
    } = this;

    const isOpen = !!openSections[label];

    this.setState({
      openSections: {
        [label]: !isOpen
      }
    });
  };

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <div className='container accordion'>
          {children.map((child, i) => (
            <AccordionSection
              isOpen={!!openSections[child.props.label]}
              label={child.props.label}
              onClick={onClick}
              key={i}
            >
              {child.props.children}
            </AccordionSection>
          ))}
      </div>
    );
  }
}

export default Accordion;