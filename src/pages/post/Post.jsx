import { useEffect, useState } from 'react'
import { BiCloudUpload } from "react-icons/bi"
import { Timestamp } from "firebase/firestore"
import FooterComponent from '../../components/FooterComponent.jsx'
import NavComponent from '../../components/NavComponent.jsx'
import { addPostAction } from '../../services/postActions/addPostAction.js'
import { addOnSnapshot } from '../../services/observers/PostObserver.js'
import { toast } from 'react-toastify';
import CardPostEdit from './CardPostEdit.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostAction } from '../../services/postActions/addPostAction.js'
import { updatePostAction } from '../../services/postActions/addPostAction.js'
import { deletePostAction } from '../../services/postActions/addPostAction.js'
import './Post.css'


export default function Post() {

    const [tag, setTag] = useState('')
    const [tags, setTags] = useState([])

    const [tec, setTec] = useState('')
    const [tecList, setTecList] = useState([])

    const [link, setLink] = useState('')

    const [tex, setTex] = useState('')
    const [title, setTitle] = useState('')

    const [createdAt, setCreatedAt] = useState('')

    const [image, setImage] = useState()

    const [loading, setLoading] = useState(0)

    const [posts, setPosts] = useState([])

    const { id } = useParams()

    const navigate = useNavigate()

    async function getPostId() {
        const response = await getPostAction(id)

        setTags(response.tags)
        setTecList(response.tecnologias)
        setLink(response.link)
        setTitle(response.titulo)
        setImage(response.thumbnail)
        setTex(response.assunto)
        setCreatedAt(response.criadoEm)

    }

    useEffect(() => {

        addOnSnapshot(setPosts)

        if (id) {

            getPostId()

        } else {

            return
        }

    }, [id])


    function handleTag(e) {
        e.preventDefault()

        if (tag.length <= 0) {
            return
        }

        if (tag.length <= 3 || tag.length >= 15) {
            return
        }

        const newTag = [...tags, tag]
        setTags(newTag)
        setTag('')

    }

    function handleTec(e) {
        e.preventDefault()

        if (tec.length <= 0) {
            return
        }

        if (tec.length <= 2 || tec.length >= 19) {
            return
        }

        const newTec = [...tecList, tec]
        setTecList(newTec)
        setTec('')

    }

    function handleDeleteTag(index) {

        const newTags = [...tags]
        newTags.splice(index, 1)
        setTags(newTags)

    }

    function handleDeleteTec(index) {

        const newTecs = [...tecList]
        newTecs.splice(index, 1)
        setTecList(newTecs)

    }

    function imagesChange(text, index) {

        if (text === 'JavaScript' || text === 'javascript' || text === 'js') {
            return (
                <img src='/icons/jsicon.png' key={index} onClick={() => handleDeleteTec(index)} />
            )

        } if (text === 'React' || text === 'react') {

            return (
                <img src='/icons/reacticon.png' key={index} onClick={() => handleDeleteTec(index)} />
            )

        } if (text === 'HTML' || text === 'html') {

            return (
                <img src='/icons/htmlicon.png' key={index} onClick={() => handleDeleteTec(index)} />
            )

        } if (text === 'CSS' || text === 'css') {

            return (
                <img src='/icons/cssicon.png' key={index} onClick={() => handleDeleteTec(index)} />
            )

        } if (text === 'NEXT' || text === 'next' || text === 'Next' || text === 'Next.js' || text === 'Next js' || text === 'next js') {

            return (
                <img src='/icons/nextjsicon.png' key={index} onClick={() => handleDeleteTec(index)} />
            )

        } if (text === 'tailwind' || text === 'Tailwind') {

            return (
                <img src='/icons/tailwindicon.png' key={index} onClick={() => handleDeleteTec(index)} />
            )

        } if (text === 'node' || text === 'Node' || text === 'Node js' || text === 'Node.js' || text === 'nodejs' || text === 'node js' || text === 'node.js') {

            return (
                <img src='/icons/nodejsicon.png' key={index} onClick={() => handleDeleteTec(index)} />
            )

        } if (text === 'Fire Base' || text === 'FireBase' || text === 'firebase' || text === 'fire base' || text === 'fire Base' || text === 'Fire base' || text === 'FIREBASE' || text === 'FIRE BASE' || text === 'Firebase') {

            return (
                <img src='/icons/firebaseicon.png' key={index} onClick={() => handleDeleteTec(index)} />
            )

        } if (text === 'MySql' || text === 'mysql' || text === 'My Sql' || text === 'my sql' || text === 'MySQL' || text === 'MYSQL') {

            return (
                <img src='/icons/mysqlicon.png' key={index} onClick={() => handleDeleteTec(index)} />
            )

        } if (text === 'MongoDB' || text === 'mongodb' || text === 'MongoDb' || text === 'Mongodb' || text === 'mongoDB' || text === 'mongoDb' || text === 'MONGODB') {

            return (
                <img src='/icons/mongodbicon.png' key={index} onClick={() => handleDeleteTec(index)} />
            )

        } if (text === 'stiledcomponent' || text === 'StiledComponent' || text === 'Stiledcomponent' || text === 'stiledComponent' || text === 'Stiled Component' || text === 'stiled component' || text === 'STILEDCOMPONENT') {

            return (
                <img src='/icons/stiledcomponenticon.png' key={index} onClick={() => handleDeleteTec(index)} />
            )

        } if (text === 'Figma' || text === 'figma' || text === 'FIGMA') {

            return (
                <img src='/icons/figmaicon.svg' key={index} onClick={() => handleDeleteTec(index)} />
            )

        } if (text === 'TS' || text === 'ts' || text === 'Ts' || text === 'typescript' || text === 'TypeScript' || text === 'TYPESCRIPT') {
            return (
                <img src='/icons/typescripticon.png' key={index} onClick={() => handleDeleteTec(index)} />
            )
        } else {
            return (
                <p key={index} onClick={() => handleDeleteTec(index)}>{text}</p>
            )
        }
    }

    function handleClear(e) {

        e.preventDefault()

        setTag('')
        setTec('')
        setTex('')
        setTitle('')
        setLink('')
    }

    async function handleSubmit(e) {

        e.preventDefault()



        if (title.length <= 5) {
            toast.error('O titulo deve ter ao menos 5 caracteres')
            return
        }

        if (tags.length <= 0) {
            toast.error('Deve haver ao menos 1 tag')
            return
        }

        if (tecList.length <= 0) {
            toast.error('Deve haver ao menos 1 tecnologia')
            return
        }

        if (link.length <= 10) {
            toast.error('O link deve ter mais de 10 caracteres')
            return
        }

        if (tex.length <= 100) {
            toast.error('O texto deve ter mais de 100 caracteres')
            return
        }

        if (!image) {
            toast.error('Deve haver uma imagem')
            return
        }

        setLoading(1)

        try {

            const data = {
                thumbnail: image,
                titulo: title,
                tags: tags,
                tecnologias: tecList,
                link: link,
                assunto: tex,
                criadoEm: Timestamp.fromDate(new Date())
            }

            await addPostAction(data)

            reset()

            setLoading(0)
            toast.success('Enviado com sucesso')

        } catch (error) {

            toast.error('Erro inesperado')
            setLoading(0)

        }

    }

    function reset() {

        setTag('')
        setTec('')
        setTex('')
        setTitle('')
        setLink('')

        setImage()
        setTags([])
        setTecList([])
    }

    function handleImage(e) {
        const inputTarget = e.target
        const file = inputTarget.files[0]

        if (file) {

            const reader = new FileReader()

            reader.addEventListener('load', (e) => {
                const readerTarget = e.target


                const src = readerTarget.result
                setImage(src)

            })

            reader.readAsDataURL(file)


        } else {

            return

        }

    }

    async function handleEdit(e) {
        e.preventDefault()

        if (title.length <= 5) {
            toast.error('O titulo deve ter ao menos 5 caracteres')
            return
        }

        if (tags.length <= 0) {
            toast.error('Deve haver ao menos 1 tag')
            return
        }

        if (tecList.length <= 0) {
            toast.error('Deve haver ao menos 1 tecnologia')
            return
        }

        if (!link || link.length <= 0) {
            toast.error('O link deve ter mais de 10 caracteres')
            return
        }

        if (tex.length <= 100) {
            toast.error('O texto deve ter mais de 100 caracteres')
            return
        }

        if (!image) {
            toast.error('Deve haver uma imagem')
            return
        }

        setLoading(1)

        try {

            const newData = {
                thumbnail: image,
                titulo: title,
                tags: tags,
                tecnologias: tecList,
                link: link,
                assunto: tex,
                criadoEm: createdAt,
                editadoEm: Timestamp.fromDate(new Date())
            }

            await updatePostAction(id, newData)
            toast.success('Atualizado com sucesso')
            setLoading(0)
            reset()
            navigate('/post')

        } catch (error) {

            toast.error('Erro inesperado')
            setLoading(0)

        }

    }

    async function handleDeletePost(e) {
        e.preventDefault()

        const isConfirmed = window.confirm('Tem certeza de que deseja excluir este documento?')

        if (isConfirmed) {

            setLoading(1)

            try {

                await deletePostAction(id)
                setLoading(0)
                toast.success('Documento excluido com sucesso.')
                reset()
                navigate('/post')


            } catch (error) {

                toast.error('Erro inesperado')
                setLoading(0)

            }


        } else {
            return
        }

    }

    return (
        <section className='postsection'>
            <NavComponent />

            {loading === 0 ? '' : <div className='loading'>Loading...</div>}

            <form className='postsform'>

                <div className='postsform-divThumnail'>
                    <label className='divThumnail' id='thumbnail'>

                        {
                            image ? (
                                <img src={image} className='divThumnail-image'></img>
                            ) : (
                                [
                                    <BiCloudUpload size={100} key="uploadIcon" />,
                                    <p key="uploadText">Selecionar Thumbnail</p>
                                ]
                            )
                        }

                        <input type='file' onChange={(e) => handleImage(e)} accept=".png, jpeg"></input>
                    </label>

                    <div className='postsform-Div'>

                        <div className='postsform-DivTags' >
                            {tags.map((t, index) => {
                                return (
                                    <p key={index} onClick={() => handleDeleteTag(index)}>{t}</p>
                                )
                            })}
                        </div>

                        <div className='postsform-DivTec'>
                            {tecList.map((t, index) => {
                                return (
                                    imagesChange(t, index)
                                )
                            })}
                        </div>

                    </div>


                </div>

                <div className='postsform-divForm'>

                    <input type='text' placeholder='Titulo' value={title} className='mainInput titleInput' onChange={(e) => setTitle(e.target.value)}></input>

                    <div className='postsform-divForm-div'>
                        <label htmlFor='tag' className='postsform-divForm-tag'>
                            <input type='text' id='tag' name='tag' placeholder='Tags' className='tagInput' onChange={(e) => setTag(e.target.value)} value={tag}
                                onKeyDown={e => {
                                    if (e.key === 'Enter') {
                                        handleTag(e)
                                    }
                                }}></input>

                        </label>

                        <label htmlFor='tecnologia' className='postsform-divForm-tag' >
                            <input type='text' id='tecnologia' name='tecnologia' placeholder='Tecnologias' className='tagInput' onChange={(e) => setTec(e.target.value)} value={tec}
                                onKeyDown={e => {
                                    if (e.key === 'Enter') {
                                        handleTec(e)
                                    }
                                }}></input>
                        </label>
                    </div>

                    <input type='text' placeholder='Link' value={link} className='mainInput' onChange={(e) => setLink(e.target.value)}></input>

                    <textarea placeholder='Assunto' className='mainInput mainArea' value={tex} onChange={(e) => setTex(e.target.value)}></textarea>
                    <div className='textlenght'>{tex.length}/4000</div>
                    <div className='postsform-buttons'>

                        {id ?
                            (
                                <>
                                    <button className='postsform-button-send' onClick={(e) => handleEdit(e)}>Editar</button>
                                    <button className='postsform-button-clear' onClick={(e) => handleDeletePost(e)}>Excluir</button>
                                </>
                            ) :
                            (
                                <>
                                    <button className='postsform-button-send' onClick={(e) => handleSubmit(e)}>Enviar</button>
                                    <button className='postsform-button-clear' onClick={(e) => handleClear(e)}>Apagar</button>
                                </>

                            )}

                    </div>
                </div>

            </form>

            <div className='anotherPosts'>

                <div className='anotherPosts-cards'>
                    {posts.map(p => {
                        return (
                            <CardPostEdit key={p.id} post={p} />
                        )
                    })}
                </div>

            </div>

            <FooterComponent />
        </section>
    )
}