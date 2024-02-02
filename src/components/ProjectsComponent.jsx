import CardComponent from './CardComponent'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { BiSolidPlusSquare } from "react-icons/bi";

import './ProjectsComponent.css'

export default function ProjectsComponent({ posts }) {


    return (
        <section className="project-section" id='projects'>

            <div className='project-section-div'>
                <h5>Projetos</h5>
                <Link to={'/post'} ><BiSolidPlusSquare size={40} /></Link>
            </div>

            <main className='project-section-main'>

                {posts.map(post => {

                    return (
                        <CardComponent post={post} key={post.id} />
                    )
                })}


            </main>

        </section>
    )
}

ProjectsComponent.propTypes = {
    posts: PropTypes.array.isRequired,

};