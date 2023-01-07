import React from 'react';

export default function JiwonOfJan() {
  return (
    <div className="container1">
      <div>
        <h1 className="container1">Display properties</h1>
        <h3 className="container1">'div' - Default is block</h3>
        <div className="display1"></div>
        <div className="display1"></div>
        <div className="display1"></div>

        <h3 className="container1">'span' - Default is inline</h3>
        <span className="display1">January Of Jiwon</span>
        <span className="display1">January Of Jiwon</span>
        <span className="display1">January Of Jiwon</span>

        <h3 className="container1">'div' - display becomes 'inline-block'</h3>
        <div className="display2"></div>
        <div className="display2"></div>
        <div className="display2"></div>

        <h3 className="container1">'div' - display becomes 'block'</h3>
        <span className="display2">January Of Jiwon</span>
        <span className="display2">January Of Jiwon</span>
        <span className="display2">January Of Jiwon</span>
      </div>
    </div>
  );
}
