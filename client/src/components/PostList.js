import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Posts from './Posts';
import Pagenation from './Pagenation';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(5);
  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://localhost:5000/posts');
      // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  //  Get current posts
  let indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  
  if (indexOfLastPost > posts.length){
    indexOfLastPost = posts.length
  }
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // console.log(posts);
  return (
    <div className="container m-5">
      <h1 className="text-primary mb-3">Post List </h1>
      <div className="form-group">
        <label>
          Set post per page:
          <select className="form-control" value={postPerPage} onChange={(e) => setPostPerPage(e.target.value)}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </label>
      </div>   
      <Pagenation
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        page={currentPage}
      />   
      <Posts posts={currentPosts} loading={loading} />
      
    </div>
  )
}

export default PostList
