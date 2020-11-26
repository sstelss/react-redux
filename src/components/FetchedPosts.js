import React from 'react'
import Post from './Post'

export default function Posts ({ posts }) {
  if (!posts.length) {
    return  <button className="btn btn-primary">Загрузить</button>
  }
  return (
    <div className="div">
      <h1>Fetched Posts</h1>
    </div>
  )
}