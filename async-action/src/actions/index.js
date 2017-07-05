export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'


// 用户 action start
// 选择 reddit
export const selectReddit = reddit => ({
  type: SELECT_REDDIT,
  reddit
})

// 刷新 reddit
export const invalidateReddit = reddit => ({
  type: INVALIDATE_REDDIT,
  reddit
})
// 用户 action  end


// 网络 action  start
// 获取 reddit
export const requestPosts = reddit => ({
  type: REQUEST_POSTS,
  reddit
})
// 接收到 reddit
export const receivePosts = (reddit, json) => ({
  type: RECEIVE_POSTS,
  reddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})

// 网络请求： thunk action
const fetchPosts = reddit => {
  // thunk 最终返回的是一个函数， 由 thunk middleware 处理
  return dispatch => {
    // 分发 请求action
    dispatch(requestPosts(reddit))
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then(response => response.json())
      .then(json => {
        // 请求成功，响应 action
        dispatch(receivePosts(reddit, json))
      })
    // 捕获网络异常
  }
}

const shouldFetchPosts = (state, reddit) => {
  const posts = state.postsByReddit[reddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

// getState ?
export const fetchPostsIfNeeded = reddit => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
      // 在 thunk 中 分发另一个 thunk
      return dispatch(fetchPosts(reddit))
    }
  }
}
