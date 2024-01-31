import { useParams } from "react-router-dom"
import NavComponent from "../../components/NavComponent"
import { useEffect, useState } from "react"
import { getPostAction } from "../../services/postActions/addPostAction"
import FooterComponent from '../../components/FooterComponent'
import { BsClockFill } from "react-icons/bs"
import './Content.css'

export default function Content() {

    let { contentId } = useParams()

    const [content, setContent] = useState({})
    const [tecInfo, setTecInfo] = useState('')

    useEffect(() => {

        async function getContent() {

            const contentData = await getPostAction(contentId)

            setContent(contentData)
        }
        getContent()

    }, [contentId])

    function imagesChange(text) {

        if (text === 'JavaScript' || text === 'javascript' || text === 'js') {
            return (
                <li key={text}
                    onMouseOver={() => setTecInfo(text)}
                    onMouseOut={() => setTecInfo('')}
                >

                    <img src='/icons/jsicon.png' key={text} />
                    {tecInfo === text && (<p>{tecInfo}</p>)}

                </li>

            )

        } if (text === 'React' || text === 'react') {

            return (
                <li key={text}
                    onMouseOver={() => setTecInfo(text)}
                    onMouseOut={() => setTecInfo('')}
                >

                    <img src='/icons/reacticon.png' key={text} />
                    {tecInfo === text && (<p>{tecInfo}</p>)}
                </li>

            )

        } if (text === 'HTML' || text === 'html') {

            return (
                <li key={text}
                    onMouseOver={() => setTecInfo(text)}
                    onMouseOut={() => setTecInfo('')}
                >

                    <img src='/icons/htmlicon.png' key={text} />
                    {tecInfo === text && (<p>{tecInfo}</p>)}
                </li>

            )

        } if (text === 'CSS' || text === 'css') {

            return (
                <li key={text}
                    onMouseOver={() => setTecInfo(text)}
                    onMouseOut={() => setTecInfo('')}
                >

                    <img src='/icons/cssicon.png' key={text} />
                    {tecInfo === text && (<p>{tecInfo}</p>)}
                </li>

            )

        } if (text === 'NEXT' || text === 'next' || text === 'Next' || text === 'Next.js' || text === 'Next js' || text === 'next js') {

            return (
                <li key={text}
                    onMouseOver={() => setTecInfo(text)}
                    onMouseOut={() => setTecInfo('')}
                >

                    <img src='/icons/nextjsicon.png' key={text} />
                    {tecInfo === text && (<p>{tecInfo}</p>)}
                </li>

            )

        } if (text === 'tailwind' || text === 'Tailwind') {

            return (
                <li key={text}
                    onMouseOver={() => setTecInfo(text)}
                    onMouseOut={() => setTecInfo('')}
                >

                    <img src='/icons/tailwindicon.png' key={text} />
                    {tecInfo === text && (<p>{tecInfo}</p>)}
                </li>

            )

        } if (text === 'node' || text === 'Node' || text === 'Node js' || text === 'Node.js' || text === 'nodejs' || text === 'node js' || text === 'node.js') {

            return (
                <li key={text}
                    onMouseOver={() => setTecInfo(text)}
                    onMouseOut={() => setTecInfo('')}
                >

                    <img src='/icons/nodejsicon.png' key={text} />
                    {tecInfo === text && (<p>{tecInfo}</p>)}
                </li>

            )

        } if (text === 'Fire Base' || text === 'FireBase' || text === 'firebase' || text === 'fire base' || text === 'fire Base' || text === 'Fire base' || text === 'FIREBASE' || text === 'FIRE BASE' || text === 'Firebase') {

            return (
                <li key={text}
                    onMouseOver={() => setTecInfo(text)}
                    onMouseOut={() => setTecInfo('')}
                >

                    <img src='/icons/firebaseicon.png' key={text} />
                    {tecInfo === text && (<p>{tecInfo}</p>)}
                </li>

            )

        } if (text === 'MySql' || text === 'mysql' || text === 'My Sql' || text === 'my sql' || text === 'MySQL' || text === 'MYSQL') {

            return (
                <li key={text}
                    onMouseOver={() => setTecInfo(text)}
                    onMouseOut={() => setTecInfo('')}
                >

                    <img src='/icons/mysqlicon.png' key={text} />
                    {tecInfo === text && (<p>{tecInfo}</p>)}
                </li>

            )

        } if (text === 'MongoDB' || text === 'mongodb' || text === 'MongoDb' || text === 'Mongodb' || text === 'mongoDB' || text === 'mongoDb' || text === 'MONGODB') {

            return (
                <li key={text}
                    onMouseOver={() => setTecInfo(text)}
                    onMouseOut={() => setTecInfo('')}
                >

                    <img src='/icons/mongodbicon.png' key={text} />
                    {tecInfo === text && (<p>{tecInfo}</p>)}
                </li>

            )

        } if (text === 'stiledcomponent' || text === 'StiledComponent' || text === 'Stiledcomponent' || text === 'stiledComponent' || text === 'Stiled Component' || text === 'stiled component' || text === 'STILEDCOMPONENT') {

            return (
                <li key={text}
                    onMouseOver={() => setTecInfo(text)}
                    onMouseOut={() => setTecInfo('')}
                >

                    <img src='/icons/stiledcomponenticon.png' key={text} />
                    {tecInfo === text && (<p>{tecInfo}</p>)}
                </li>

            )

        } if (text === 'Figma' || text === 'figma' || text === 'FIGMA') {

            return (
                <li key={text}
                    onMouseOver={() => setTecInfo(text)}
                    onMouseOut={() => setTecInfo('')}
                >

                    <img src='/icons/figmaicon.svg' key={text} />
                    {tecInfo === text && (<p>{tecInfo}</p>)}
                </li>

            )

        } else {
            return (
                <p key={text}>{text}</p>
            )
        }
    }

    return (
        <main>

            <NavComponent />

            <header className="content-header">
                <img src={content.thumbnail} className="content-image"></img>
                <ul className="content-tecList">
                    {content.tecnologias ? (content.tecnologias.map(tec => {
                        return (
                            imagesChange(tec)
                        )
                    })) : ''}
                </ul>
            </header>
            <article className="content-article">

                <div className="content-article-tags">
                    {content.tags ? (content.tags.map(tag => {
                        return (
                            <p key={tag}>{tag}</p>
                        )
                    })) : ''}
                </div>

                <h2 className="content-article-title">{content.titulo}</h2>

                <div className="content-article-buttonDiv">
                    <a href={content.link} target="_blanck">Visite</a>
                </div>

                <div className="content-article-mainContent">
                    {content.assunto}
                    {content.criadoEm ?
                        (<p className="content-article-date">
                            <BsClockFill />
                            {content.editadoEm.toDate().toLocaleString()}
                        </p>)
                        :
                        ('')}
                </div>

            </article>
            <FooterComponent />
        </main>
    )
}