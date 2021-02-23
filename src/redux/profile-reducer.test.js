import profileReducer, { addPostActionCreator } from './profile-reducer';

let state = {
    posts: [
        { id: 1, message: "Hi, how are you?" },
        { id: 2, message: "It's my first post" }
    ]
}

it('length of posts should be incremented', () => {
    let action = addPostActionCreator("yana sezko")

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3);
    expect(newState.posts[2].message).toBe("yana sezko")
});

it('message of new post should be correct', () => {
    let action = addPostActionCreator("yana sezko")

    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe("yana sezko")
});

