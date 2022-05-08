import React from 'react';
import ReactToPrint from 'react-to-print';
import Ticket1 from '../Ticket1/index'


class Example extends React.PureComponent {
    
  render() {
    return (
      <div>
        <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#">Print Movie Ticket</a>;
          }}
          content={() => this.componentRef}
        />
        </div>
      <div>
      <Ticket1 ref={el => (this.componentRef = el)} />
      </div>

    
      </div>
    );
  }
}
export default Example;