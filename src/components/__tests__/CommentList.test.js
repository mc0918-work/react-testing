import React from 'react';
import CommentList from 'components/CommentList';
import Root from 'Root'
import { mount } from 'enzyme';

let wrapped;

beforeEach(()=> {
    const initialState = {
        comments: ['comment 1', 'comment 2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it('create one li element per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
    // console.log(wrapped.render().text());
    expect(wrapped.render().text()).toContain('comment 1');
    expect(wrapped.render().text()).toContain('comment 2');
});