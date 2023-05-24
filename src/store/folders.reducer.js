import { ADD_FOLDER, DELETE_FOLDER, UPDATE_FOLDER } from './folders.action'

import { LOAD_FOLDERS } from './folders.action';

const initialState = {
    folders: [],
  };
  
  const folderReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_FOLDER:
        return {
          ...state,
          folders: [...state.folders, action.payload]
        };
      case UPDATE_FOLDER:
        return {
          ...state,
          folders: {
            ...state.folders.map(folder => {
              if (folder.id === action.payload.folderId) {
                return { ...folder, images: action.payload.images }
              }
              return folder
            })
          }
        };
      case DELETE_FOLDER:
        return {
          ...state,
          folders: state.folders.filter(folder => folder.id !== action.payload)
        }
      case LOAD_FOLDERS:
        return{
          ...state,
          folders: action.folders
        }
      default:
        return state;
    }
  };

  export default folderReducer