import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {shallow} from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList'

// To use enzyme we need the setUpTests.js file configured
// to use relative routing we need the jsconfig.json file configured

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

//can use test() or it() interchangeably
it('shows a comment box component', () => {
    // const wrapped = shallow(<App />);
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list component', () => {
    // const wrapped = shallow(<App />);
    expect(wrapped.find(CommentList).length).toEqual(1);
});

