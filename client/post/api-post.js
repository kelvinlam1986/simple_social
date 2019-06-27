import { string } from "prop-types";

const create = (params, credential, post) => {
  return fetch("/api/posts/new/" + params.userId, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + credential.t
    },
    body: post
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const listNewsFeed = (params, credentital) => {
  return fetch("/api/posts/feed/" + params.userId, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credentital.t
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const like = (params, credential, postId) => {
  return fetch("/api/posts/like", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credential.t
    },
    body: JSON.stringify({ userId: params.userId, postId: postId })
  })
    .then(respsonse => {
      return respsonse.json();
    })
    .catch(err => console.log(err));
};

const unlike = (params, credential, postId) => {
  return fetch("/api/posts/unlike", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credential.t
    },
    body: JSON.stringify({ userId: params.userId, postId: postId })
  })
    .then(respsonse => {
      return respsonse.json();
    })
    .catch(err => console.log(err));
};

const remove = (params, credential) => {
  return fetch("/api/posts/" + params.postId, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credential.t
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const comment = (params, credential, postId, comment) => {
  return fetch("/api/posts/comment", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credential.t
    },
    body: JSON.stringify({
      userId: params.userId,
      postId: postId,
      comment: comment
    })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

const uncomment = (params, credential, postId, comment) => {
  return fetch("/api/posts/uncomment", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + credential.t
    },
    body: JSON.stringify({
      userId: params.userId,
      postId: postId,
      comment: comment
    })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export { listNewsFeed, create, like, unlike, remove, comment, uncomment };
