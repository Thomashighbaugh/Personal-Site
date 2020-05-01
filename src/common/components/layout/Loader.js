import React, { Component } from 'react';

class Loader extends Component {

  render() {
    return (
	    <section className="loader">
		  <div className="ldr">
		    <div className="ldr-blk"/>
		    <div className="ldr-blk an_delay"/>
		    <div className="ldr-blk an_delay"/>
		    <div className="ldr-blk"/>
		  </div>
		</section>
    );
  }
}

export default Loader;