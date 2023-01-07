import React from 'react';

export default function Position() {
  return (
    <div>
      <div className="container2">
        <h1 className="container1">Position properfies</h1>
        <h3 className="container1">Position - 'static' (by default)</h3>
        <div className="position1">static</div>
        <div className="position1">static</div>
        <div className="position1">static</div>
        <div className="position1">static</div>
      </div>

      <div className="container3">
        <h3 className="container1">
          Purple box position becomes 'fix' to change container contents
          position.
          <br />
          'fix' makes something to fix from the browser page.
        </h3>
        <h3 className="container1">
          Green box position becomes 'absolute' to change container contents
          position.
          <br />
          'absolute' makes something to move from the closest parent position to
          be.
        </h3>
        <div className="position1">static</div>
        <h3 className="container1">
          Yellow box position becomes 'relative' to change container contents
          position.
          <br />
          'relative' makes something to move from a position supposed to be.
        </h3>
        <div className="position2">relative</div>
        <div className="position1">static</div>
        <div className="position3">absolute</div>
        <div className="position4">fixed</div>
      </div>
    </div>
  );
}
