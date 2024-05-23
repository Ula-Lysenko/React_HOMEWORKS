import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";


const PostCatalog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error receiving data:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <>
            <div className="posts">
                <ul className="posts_list">
                    {posts.map((post) => (
                        <li key={post.id} className="posts_single-post" data-post-id={post.id}>
                            <h3 className="posts_post-title">{post.title}</h3>
                            <p className="posts_post-description">{post.body}</p>
                            <hr/>
                            <hr/>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};


PostCatalog.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            body: PropTypes.string,
        })),
    setPosts: PropTypes.func,
}

export default PostCatalog;
