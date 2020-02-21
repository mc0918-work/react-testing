import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';


beforeEach(() => {
    moxios.install(); //intercept axios requests

    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]    //return value, list of comment.name
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');

    moxios.wait(() => {
        wrapped.update();

        const result = wrapped.find('li').length
        expect(result).toEqual(2);

        done(); 

        wrapped.unmount();
    });

    // setTimeout(() => { //allow moxios to respond to request
    //     wrapped.update();

    //     const result = wrapped.find('li').length
    //     expect(result).toEqual(2);

    //     done(); 

    //     wrapped.unmount();
    // }, 100); //setTimeout is very imprecise... moxios has a wait function
});