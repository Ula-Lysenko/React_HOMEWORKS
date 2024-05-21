import {Component} from "react";
import PropTypes from "prop-types";

class PostCatalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }

    async componentDidMount() {
        try {
            const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            this.setState({posts: data});
        } catch (error) {
            console.error('Error receiving data:', error);
        }
    }

    render() {
        const {posts} = this.state;

        return (
            <>
                <div className='posts'>
                    <ul className='post_list'>
                        {posts.map((post) => (
                                <li key={post.id} className='posts_single-post' data-post-id={post.id}>
                                    <h4 className='posts_post-title'>{post.title}</h4>
                                    <p className='posts_post-description'>{post.body}</p>
                                    <hr/>
                                </li>
                            ))}
                    </ul>
                </div>
            </>
        );
    }
}


PostCatalog.proptypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        })).isRequired,
}

export default PostCatalog;