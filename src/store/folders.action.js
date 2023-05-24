import { REALTIME_DATABASE } from '../database/Database'

export const LOAD_FOLDERS = 'LOAD_FOLDERS'
export const ADD_FOLDER = 'ADD_FOLDER'
export const UPDATE_FOLDER = 'UPDATE_FOLDER'
export const DELETE_FOLDER = 'DELETE_FOLDER'

export const addFolder = (folder) => {
    return async dispatch => {
        try {
            const response = await fetch(`${REALTIME_DATABASE}folders.json` , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: folder,
                  images: []
                })
            })

            const data = await response.json()

            dispatch({
                type: 'ADD_FOLDER',
                payload: { id: data.name, name: folder } 
            });

        } catch (error) {
            console.error(error)
        }
    }
}

export const addImageFolder = (folder) => {
    return async dispatch => {
        try {
            const response = await fetch(`${REALTIME_DATABASE}/folders/${folder.id}.json`,
              {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  name:folder.name,
                  images: folder.images
                })
              }
            );
      
            dispatch({
                type: 'UPDATE_FOLDER',
                payload: folder
            });
      
          } catch (error) {
            console.log(error);
          }
        };
    }

export const deleteFolder = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(
              `${REALTIME_DATABASE}/folders/${id}.json`,
              {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );

            dispatch({ type: 'DELETE_FOLDER', payload: id });

          } catch (error) {
            console.log(error);
          }
    }
  };

  export const loadFolders = () => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${REALTIME_DATABASE}folders.json`);
        const data = await response.json();

        const folders = []

        for (const key in data) {
          folders.push({
            id: key,
            name: data[key].name,
            images: data[key].images || []
          })
        dispatch({ type: LOAD_FOLDERS, folders })
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
