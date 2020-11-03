import React, { useState, useEffect } from "react";
import Posts from './Posts';
import Pagination from './Pagination';
import axios from 'axios';
import './PostsPage.css';

const PostsPage = () => {
	console.log('postPage');

  	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(2);
	useEffect(()=>{
		console.log('here2');

		const fetchPosts = async()=>{
			setLoading(true);
			// const res = await axios.get('http://jsonplaceholder.typicode.com/posts');
			const res = [
				{ 
				  id: 'event1',
				  header: 'EVENT 1', 
				  title: 'Garage Sale', 
				  body: 'Body1' ,
				},{ 
				  id: 'event2',
				  header: 'EVENT 2', 
				  title: 'New Year Charitiy Party', 
				  body: 'Body2' ,
				},{ 
				  id: 'event3',
				  header: 'EVENT 3', 
				  title: 'EVENT 3 Title', 
				  body: 'Body3' ,
				}
			  ];
			setPosts(res);
			setLoading(false);
		};

		fetchPosts();
		
	}, []);
	//runs only when it mounts. In the empty [], you can put conditions that would initiate fetching

	//Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	//change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	console.log(indexOfFirstPost);
	console.log(indexOfLastPost);
    return (
		<div className='postPageContainer'>
			{/* <div className='mt-5 mb-5'> */}
			<div>
				<Posts posts={currentPosts} loading={loading}/>
				<Pagination postsPerPage={postsPerPage} totalPosts ={posts.length} paginate={paginate}/>
			</div>
	  	</div>
    );
  }

 
export default PostsPage;