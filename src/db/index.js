import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('images.db')

export const init = () => {
    
    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS images (id INTEGER PRIMARY KEY NOT NULL,title TEXT NOT NULL, image TEXT NOT NULL)',
            [],
            ()=> {resolve()},
            (_,err) => {reject(err)})
        })
    })
    return promise
}

export const insertImage = (title,image) => {
    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx)=> {
            tx.executeSql(
                'INSERT INTO images (title,image) VALUES (?,?);',
                [title,image],
                (_,result) => resolve(result),
                (_, err) => reject(err)
            )
        })
    })
    return promise
}

export const fetchImages = () => {
    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'SELECT * FROM images;',
                [],
                (_,result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise
}

export const deleteImage = (id) => {
    const promise = new Promise((resolve,reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                `DELETE FROM images WHERE id=${id}`,
                [],
                (_,result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    })
    return promise
}