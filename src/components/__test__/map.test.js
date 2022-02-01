import React from 'react';
import ReactDom from 'react-dom';
import Map from '../Map';

it("renders without crashing", () =>{
    const div = document.createElement("div");
    ReactDom.render(<Map></Map>, div)
})