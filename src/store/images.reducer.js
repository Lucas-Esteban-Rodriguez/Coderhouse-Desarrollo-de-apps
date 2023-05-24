import { ADD_IMAGE, LOAD_IMAGES, REMOVE_IMAGE } from './images.actions'

import Image from '../models/Image'

const initialState = {
    images: []
}

const imagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_IMAGE:
            const newImage = new Image(
                action.payload.id.toString(),
                action.payload.title,
                action.payload.image,
            )
            return {
                ...state,
                images: state.images.concat(newImage)
            }
        case LOAD_IMAGES:
            return {
                ...state,
                images: action.images.map(item=>new Image(
                    item.id.toString(),
                    item.title,
                    item.image
                ))
            }
        case REMOVE_IMAGE:
            return {
                ...state, 
            }
        default:
            return state
    }
}

export default imagesReducer