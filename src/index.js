import React from 'react';
import ReactDOM from 'react-dom';

const list =React.createElement('div',{className:"me"},[
            React.createElement('h1',{},"An Awesome Person"),
            React.createElement('p',{},"Who is learning React"),
            React.createElement('ul',{className:"my-interests"},
            [React.createElement('li',{},"JavaScript"),
                    React.createElement('li',{},"React"),
                    React.createElement('li',{},"Movies"),
                    React.createElement('li',{},"Icecream")]
        )]);

ReactDOM.render(
  list,
  document.getElementById('global')
);
