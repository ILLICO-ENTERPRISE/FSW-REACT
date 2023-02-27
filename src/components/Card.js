import './Card.css';
import React, { useState, useEffect } from 'react';

function Card(props) {
  if (props.type === 'USER') {
    return (
      <div
        style={{
          border: '1px solid black',
          padding: '20px',
          display: 'inline-block',
          margin: '10px',
        }}
      >
        <p style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>
          UserId: {props.item.id}
        </p>
        <p style={{ textTransform: 'uppercase' }}>{props.item.name}</p>
        <p>{props.item.username}</p>
        <p>{props.item.email}</p>
      </div>
    );
  }

  if (props.type === 'POST') {
    return (
      <div
        style={{
          border: '1px solid black',
          padding: '20px',
          display: 'inline-block',
          margin: '10px',
        }}
      >
        <p style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>
          UserId: {props.item.id}
        </p>
        <p style={{ textTransform: 'uppercase' }}>{props.item.title}</p>
        <p>{props.item.body}</p>
      </div>
    );
  }

  if (props.type === 'PHOTO') {
    return (
      <div
        style={{
          border: '1px solid black',
          padding: '20px',
          display: 'inline-block',
          margin: '10px',
          position: 'relative',
        }}
      >
        <img src={props.item.url} style={{ display: 'block', width: '100%' }} />
        <p style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>
          UserId: {props.item.id}
        </p>
        <p style={{ textTransform: 'uppercase' }}>{props.item.title}</p>
        <p>{props.item.username}</p>
        <p>{props.item.email}</p>
      </div>
    );
  }

  if (props.type === 'ALBUM') {
    return (
      <div
        style={{
          border: '1px solid black',
          padding: '20px',
          display: 'inline-block',
          margin: '10px',
        }}
      >
        <p style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>
          UserId: {props.item.id}
        </p>
        <p style={{ textTransform: 'uppercase' }}>{props.item.title}</p>
      </div>
    );
  }

  if (props.type === 'COMMENT') {
    return (
      <div
        style={{
          border: '1px solid black',
          padding: '20px',
          display: 'inline-block',
          margin: '10px',
        }}
      >
        <p style={{ fontWeight: 'bold', borderBottom: '1px solid black' }}>
          UserId: {props.item.id}
        </p>
        <p style={{ textTransform: 'uppercase' }}>{props.item.body}</p>
      </div>
    );
  }
}

export default Card;
