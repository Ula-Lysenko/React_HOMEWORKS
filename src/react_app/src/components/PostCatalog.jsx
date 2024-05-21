import React, { useState, useEffect } from 'react';

const PostCatalog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="posts">
            <ul className="posts__list">
                {posts.map((post) => (
                    <li key={post.id} className="posts_single-post" data-post-id={post.id}>
                        <h3 className="posts__post-title">{post.title}</h3>
                        <p className="posts__post-description">{post.body}</p>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostCatalog;
