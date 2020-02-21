import React from 'react';
import CommentBox from 'components/CommentBox';
import Root from 'Root'
import { mount } from 'enzyme';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and two buttons', () => {
    // console.log(wrapped.find("textarea").length);
    // console.log(wrapped.find("button").length);

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
    //this beforeEach only applies to scope of describe()
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    })

    it('allows user to enter text in textarea', () => {
        // we want to use the real html name of the event i.e. change
        // wrapped.find('textarea').simulate('change', {
        //     target: { value: 'new comment' }
        // });

        // wrapped.update();

        const result = wrapped.find('textarea').prop('value')

        expect(result).toEqual('new comment');
    });

    it('should empty comment when submit is clicked', () => {
        // wrapped.find('textarea').simulate('change', {
        //     target: {value: 'new comment'}
        // });
        // wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');


        wrapped.find('form').simulate('submit');
        wrapped.update();

        const result = wrapped.find('textarea').prop('value');

        expect(result).toEqual('');
    });
});



