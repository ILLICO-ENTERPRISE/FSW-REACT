import './Gallery.css';
import Card from './Card.js';
import React, { useState, useEffect, useRef } from 'react';
import {
  getUsers,
  getPosts,
  getAlbums,
  getPhotos,
  getComments,
} from '../services/http.js';

function Gallery(props) {
  // Define all STATES
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [comments, setComments] = useState([]);
  const [datas, setDatas] = useState({});
  const [key, setKey] = useState('USER');

  // Define the REF of INPUTS
  const userRef = useRef('USER');
  const postRef = useRef('POST');
  const albumRef = useRef('ALBUM');
  const photoRef = useRef('PHOTO');
  const commentRef = useRef('COMMENT');

  // Listen MOUNTED Event
  // Promise.all([<ASYNC_FUNCTIONS>])
  // Promise.allSettled([<ASYNC_FUNCTIONS>])
  // Listen FULFILLED/PENDING/REJECTED Status
  useEffect(() => {
    Promise.allSettled([
      getUsers(),
      getPosts(),
      getAlbums(),
      getPhotos(),
      getComments(),
    ]).then((values) => {
      // Is Resolved
      if (values[0].status === 'fulfilled') {
        setUsers(values[0].value.data);
      }
      // Is Resolved
      if (values[1].status === 'fulfilled') {
        setDatas({ data: values[1].value.data, key: 'POST' });
        setPosts(values[1].value.data);
      }
      // Is Resolved
      if (values[2].status === 'fulfilled') {
        setAlbums(values[2].value.data);
      }
      // Is Resolved
      if (values[3].status === 'fulfilled') {
        setPhotos(values[3].value.data);
      }
      // Is Resolved
      if (values[4].status === 'fulfilled') {
        setComments(values[4].value.data);
      }
      setLoading(false);
    });

    // Clear for UNMOUNTED
    return function () {
      setUsers([]);
      setPosts([]);
      setAlbums([]);
      setPhotos([]);
      setComments([]);
      setLoading(true);
    };
  }, []);

  // useEffect(() => {
  // }, [key])

  function getRadioValue(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <div>
        <fieldset>
          <legend>List of Keys</legend>
          <div>
            <div>
              <input
                type="radio"
                name="search"
                value="USER"
                id="USER"
                onChange={getRadioValue}
              />
              <label htmlFor="USER">USER</label>
            </div>
            <div>
              <input
                type="radio"
                name="search"
                value="POST"
                id="POST"
                onChange={getRadioValue}
              />
              <label htmlFor="POST">POST</label>
            </div>
            <div>
              <input
                type="radio"
                name="search"
                value="PHOTO"
                id="PHOTO"
                onChange={getRadioValue}
              />
              <label htmlFor="PHOTO">PHOTO</label>
            </div>
            <div>
              <input
                type="radio"
                name="search"
                value="ALBUM"
                id="ALBUM"
                onChange={getRadioValue}
              />
              <label htmlFor="ALBUM">ALBUM</label>
            </div>
            <div>
              <input
                type="radio"
                name="search"
                value="COMMENT"
                id="COMMENT"
                onChange={getRadioValue}
              />
              <label htmlFor="COMMENT">COMMENT</label>
            </div>
          </div>
        </fieldset>
      </div>
      <br />
      <div className="Gallery">
        {loading ? (
          <div>Loading...</div>
        ) : (
          Array.from(datas.data).map(function (item, index) {
            return <Card key={index} item={item} type={datas.key} />;
          })
        )}
      </div>
    </div>
  );
}

export default Gallery;
