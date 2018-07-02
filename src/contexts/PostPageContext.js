import React from 'react';

import postAPI from '../postAPI';

const { Provider, Consumer } = React.createContext();

export default class PostPageProvider extends React.Component {
  state = { posts: [], loading: false };
  async componentDidMount() {
    await this.fetchPosts();
  }

  fetchPosts = async () => {
    this.setState({ loading: true });
    const res = await postAPI.get('/posts');
    this.setState({
      posts: res.data,
      loading: false,
    });
  };

  createPosts = async newPostBody => {
    let localeDate = new Date().toLocaleDateString();
    let localeTime = new Date().toLocaleTimeString();
    const newpost = {
      body: newPostBody,
      submitTime: localeDate + '  ' + localeTime,
    };
    this.setState({ loading: true });
    await postAPI.post('/posts', newpost);
    await this.fetchPosts();
  };
  deletePosts = async id => {
    // 할일 삭제 할때 사용
    this.setState({ loading: true });
    await postAPI.delete(`/posts/${id}`);
    await this.fetchPosts();
  };
  updatePosts = async (id, body) => {
    await postAPI.patch(`/posts/${id}`, {
      body: body,
    });
  };
  render() {
    const value = {
      posts: this.state.posts,
      loading: this.state.loading,
      fetchPosts: this.fetchPosts,
      createPosts: this.createPosts,
      deletePosts: this.deletePosts,
      updatePosts: this.updatePosts,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { PostPageProvider, Consumer as PostPageConsumer };
