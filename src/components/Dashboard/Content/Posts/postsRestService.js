import restApiService from '../../../../restApiService/RestApiService';

class PostsRestService {
  prepareToken() {
    const token = localStorage.getItem('token');
    return {
      headers: {
        'X-Token': token,
      },
    };
  }

  getPosts(page = 1, order = 'asc', orderBy = 'title') {
    return restApiService.get(
      `posts?page=${page}&order=${order}&orderBy=${orderBy}`,
      this.prepareToken()
    );
  }

  getPost(id) {
    return restApiService.get(`posts/${id}`, this.prepareToken());
  }

  getAuthor(id) {
    return restApiService.get(`author/${id}`, this.prepareToken());
  }

  postComment(payload) {
    return restApiService.post(`comments`, payload, this.prepareToken());
  }

  logTime(id, payload) {
    return restApiService.put(`time/${id}`, payload, this.prepareToken());
  }
}

export default new PostsRestService();
