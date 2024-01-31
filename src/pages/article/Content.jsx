import { useParams } from "react-router-dom"
import NavComponent from "../../components/NavComponent"
import { useEffect, useState } from "react"
import { getPostAction } from "../../services/postActions/addPostAction"
import FooterComponent from '../../components/FooterComponent'
import './Content.css'

export default function Content() {

    let { contentId } = useParams()

    const [content, setContent] = useState({})

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
                <img src='/icons/jsicon.png' key={text} />
            )

        } if (text === 'React' || text === 'react') {

            return (
                <img src='/icons/reacticon.png' key={text} />
            )

        } if (text === 'HTML' || text === 'html') {

            return (
                <img src='/icons/htmlicon.png' key={text} />
            )

        } if (text === 'CSS' || text === 'css') {

            return (
                <img src='/icons/cssicon.png' key={text} />
            )

        } if (text === 'NEXT' || text === 'next' || text === 'Next' || text === 'Next.js' || text === 'Next js' || text === 'next js') {

            return (
                <img src='/icons/nextjsicon.png' key={text} />
            )

        } if (text === 'tailwind' || text === 'Tailwind') {

            return (
                <img src='/icons/tailwindicon.png' key={text} />
            )

        } if (text === 'node' || text === 'Node' || text === 'Node js' || text === 'Node.js' || text === 'nodejs' || text === 'node js' || text === 'node.js') {

            return (
                <img src='/icons/nodejsicon.png' key={text} />
            )

        } if (text === 'Fire Base' || text === 'FireBase' || text === 'firebase' || text === 'fire base' || text === 'fire Base' || text === 'Fire base' || text === 'FIREBASE' || text === 'FIRE BASE' || text === 'Firebase') {

            return (
                <img src='/icons/firebaseicon.png' key={text} />
            )

        } if (text === 'MySql' || text === 'mysql' || text === 'My Sql' || text === 'my sql' || text === 'MySQL' || text === 'MYSQL') {

            return (
                <img src='/icons/mysqlicon.png' key={text} />
            )

        } if (text === 'MongoDB' || text === 'mongodb' || text === 'MongoDb' || text === 'Mongodb' || text === 'mongoDB' || text === 'mongoDb' || text === 'MONGODB') {

            return (
                <img src='/icons/mongodbicon.png' key={text} />
            )

        } if (text === 'stiledcomponent' || text === 'StiledComponent' || text === 'Stiledcomponent' || text === 'stiledComponent' || text === 'Stiled Component' || text === 'stiled component' || text === 'STILEDCOMPONENT') {

            return (
                <img src='/icons/stiledcomponenticon.png' key={text} />
            )

        } if (text === 'Figma' || text === 'figma' || text === 'FIGMA') {

            return (
                <img src='/icons/figmaicon.svg' key={text} />
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
                <div className="content-tecList">
                    {content.tecnologias ? (content.tecnologias.map(tec => {
                        return (
                            imagesChange(tec)
                        )
                    })) : ''}
                </div>
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
                </div>

            </article>
            <FooterComponent />
        </main>
    )
}