import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CardComponent.css'

export default function CardComponent({ post }) {

    const navigate = useNavigate()

    function handleClick(e) {
        e.preventDefault()

        navigate(`/content/${post.id}`)
    }

    return (
        <div className="cardcomponent" key={post.id} onClick={(e) => handleClick(e)}>
            <img src={post.thumbnail}></img>
        </div>
    )
}

CardComponent.propTypes = {
    post: PropTypes.object.isRequired,

};