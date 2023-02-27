import './Gallery.css';
import Card from './Card.js';
import React, { useState, useEffect } from 'react';
import {
  getUsers,
  getPosts,
  getAlbums,
  getPhotos,
  getComments,
} from '../services/http.js';

function Gallery(props) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getUsers().then(function (users) {
      setUsers(users.data);
      setLoading(false);
    });

    getPosts().then(function (posts) {
      setPosts(posts.data.slice(0, 10));
      setLoading(false);
    });

    getAlbums().then(function (albums) {
      setAlbums(albums.data.slice(0, 10));
      setLoading(false);
    });

    getPhotos().then(function (photos) {
      setPhotos(photos.data.slice(0, 10));
      setLoading(false);
    });

    getComments().then(function (comments) {
      setComments(comments.data.slice(0, 10));
      setLoading(false);
    });

    return function () {
      setUsers([]);
      setPosts([]);
      setAlbums([]);
      setPhotos([]);
      setComments([]);
    };
  }, []);

  return (
    <div>
      <div className="Gallery">
        {loading ? (
          <div>Loading...</div>
        ) : (
          Array.from(posts).map(function (item, index) {
            return <Card key={index} item={item} type={'POST'} />;
          })
        )}
      </div>
    </div>
  );
}

export default Gallery;
