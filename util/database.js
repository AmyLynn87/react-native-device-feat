//Libs
import * as SQLite from "expo-sqlite";

//Local

const database = SQLite.openDatabase("places.db");

export const init = () => {
  const promises = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        ` CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL, 
        title TEXT NOT NULL, 
        imageUri TEXT NOT NULL, 
        address TEXT NOT NULL, 
        lat REAL NOT NULL, 
        lng REAL NOT NULL)`,
        (error) => {
          reject(error.message);
        },
        () => {
          resolve(true);
          console.log("Created database OK");
        }
      );
    });
  });
  return promises;
};

export function insertPlace(place) {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?,?,?,?,?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.location.lat,
          place.location.lng,
        ],
        (_, result) => {
          console.log(result);
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}

export function fetchPlaces() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });
  return promise;
}
