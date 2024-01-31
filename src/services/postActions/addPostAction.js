import { addPostAcess, deletePostAcess, getPostAcess, updatePostAcess } from "../postAcess/PostAcess";


export async function addPostAction(data) {
    const response = await addPostAcess(data)
    return response.id
}

export async function getPostAction(id) {

    const response = await getPostAcess(id)

    if (response.exists()) {

        return response.data()

    } else {

        console.log('Nenhum documento encontrado.')

    }

}

export async function updatePostAction(id, data) {

    const response = await updatePostAcess(id, data)

    return response
}

export async function deletePostAction(id) {

    const response = await deletePostAcess(id)

    return response
}