import * as FileSystem from "expo-file-system";

import { deleteImage, fetchImages, insertImage } from "../db/index";

export const ADD_IMAGE = "ADD_IMAGE"
export const LOAD_IMAGES = "LOAD_IMAGES"
export const REMOVE_IMAGE = "REMOVE_IMAGE"



export const addImage = (title, image) => {
  return async (dispatch) => {
    
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName + '.jpg';
    
    try {
      FileSystem.moveAsync({
        from: image,
        to: Path,
      });
    } catch (error) {
      console.log(error.message);
      throw error;
    }
    const resultDb = await insertImage(
      title,
      Path,
      );
      
      console.log(resultDb);

    dispatch({
      type: ADD_IMAGE,
      payload: { id: resultDb.insertId, title, image: Path },
    });

  };
};

export const loadImages = () => {
    return async dispatch => {
        try {
            const result = await fetchImages()
            console.log("Load Images:",result)
            dispatch({type: LOAD_IMAGES, images:result.rows._array})
        } catch(error) {
            throw error
        }
    }
}

export const removeImage = (id) => {
    return async dispatch => {
        try {
            const result = await deleteImage(id)
            console.log(result)
            dispatch({type: REMOVE_IMAGE, payload: id})
        } catch (error) {
            throw error
        }
    }
}
