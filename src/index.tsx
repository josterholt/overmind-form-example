import React from "react";
import ReactDOM from "react-dom";
import { createHook, Provider } from "overmind-react";

import { createOvermind } from 'overmind';

const initial_state = {
    title: 'My App'
};

const overmind = createOvermind(initial_state);

const  MyApp = function () {
    return <div>Testing</div>;
}
ReactDOM.render(<Provider value={overmind}><MyApp /></Provider>, document.getElementById('app'));