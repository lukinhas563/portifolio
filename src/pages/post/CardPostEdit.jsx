import PropTypes from 'prop-types'
import './CardPostEdit.css'
import { useNavigate } from 'react-router-dom'

export default function CardPostEdit({ post }) {

    const navigate = useNavigate()

    function handleClick() {
        navigate(`/post/edit/${post.id}`)
    }

    return (
        <div className='cardPostEdit' onClick={() => handleClick()}>
            <img src={post.thumbnail}></img>
        </div>
    )
}

CardPostEdit.propTypes = {
    post: PropTypes.object.isRequired,

};