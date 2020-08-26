import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';

import renderer from 'react-test-renderer';

describe('Accordion component', () => {


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Accordion />, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('renders UI as expected', () => {
    const tree = renderer
    .create(<Accordion title="title" content="content" />)
    .toJSON();
expect(tree).toMatchSnapshot();
})







});