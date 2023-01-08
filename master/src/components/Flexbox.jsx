import React from 'react';

export default function Flexbox() {
  return (
    <div>
      <h1 className="container1">Flexbox properties</h1>
      <h3 className="container1">
        Display flex makes item align from left to right by default.
        <br /> In this case, flex-direction: row is by default.
        <br /> flex-wrap: wrap makes the item keep default sizing regardless of
        browser size.
      </h3>
      <div className="container4">
        <div className="item item1">1</div>
        <div className="item item2">2</div>
        <div className="item item3">3</div>
        <div className="item item4">4</div>
        <div className="item item5">5</div>
        <div className="item item1">1</div>
        <div className="item item2">2</div>
        <div className="item item3">3</div>
        <div className="item item4">4</div>
        <div className="item item5">5</div>
      </div>

      <h3 className="container1">
        flex-direction: column makes the center moving with columns.
      </h3>
      <div className="container5">
        <div className="item item1">1</div>
        <div className="item item2">2</div>
        <div className="item item3">3</div>
        <div className="item item4">4</div>
        <div className="item item5">5</div>
      </div>

      <h3 className="container1">
        justify-content: center makes items align with a center.
      </h3>
      <div className="container6">
        <div className="item item1">1</div>
        <div className="item item2">2</div>
        <div className="item item3">3</div>
        <div className="item item4">4</div>
        <div className="item item5">5</div>
      </div>

      <h3 className="container1">
        justify-content: flex-end makes items keep orders, but align with
        right-end.{' '}
      </h3>
      <div className="container7">
        <div className="item item1">1</div>
        <div className="item item2">2</div>
        <div className="item item3">3</div>
        <div className="item item4">4</div>
        <div className="item item5">5</div>
      </div>

      <h3 className="container1">justify-content: space-around;</h3>
      <div className="container8">
        <div className="item item1">1</div>
        <div className="item item2">2</div>
        <div className="item item3">3</div>
        <div className="item item4">4</div>
        <div className="item item5">5</div>
      </div>

      <h3 className="container1">justify-content: space-between.</h3>
      <div className="container9">
        <div className="item item1">1</div>
        <div className="item item2">2</div>
        <div className="item item3">3</div>
        <div className="item item4">4</div>
        <div className="item item5">5</div>
      </div>

      <h3 className="container1">justify-content: space-evenly.</h3>
      <div className="container10">
        <div className="item item1">1</div>
        <div className="item item2">2</div>
        <div className="item item3">3</div>
        <div className="item item4">4</div>
        <div className="item item5">5</div>
      </div>

      <h3 className="container1">
        justify-content: center && align-items: center.
      </h3>
      <div className="container11">
        <div className="item item1">1</div>
        <div className="item item2">2</div>
        <div className="item item3">3</div>
        <div className="item item4">4</div>
        <div className="item item5">5</div>
      </div>
    </div>
  );
}
