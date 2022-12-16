import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabase('places.db');

export function init() {
  const promise = new Promise((resolve, reject) => {

    database.transaction((tx) => {
      tx.executeSql(`CREATE TABLE IF NOT EXISTS place (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        lng REAL NOT NULL
      )`,
      [],
      () => {
        console.log('Table created')
        resolve()
      },
      (_, err) => {
        console.log('Error creating table', err)
        reject(err)
      }
      )
    })
  })

  return promise
}