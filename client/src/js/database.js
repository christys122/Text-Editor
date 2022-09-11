import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to database');

  const contactDb = await openDB('contact_db', 1);

  const tx = contactDb.transaction('contacts', 'readwrite');

  const store = tx.objectStore('contacts');

  const request = store.add({content});

  const result = await request;
  console.log('data saved to database', result);
}
  //console.error('putDb not implemented');

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET from db');

  const contactDb = await openDB('jate_db', 1);

  const tx = contactDb.transaction('jate', 'readonly');

  const store = tx.objectStore('jate');

  const request = store.getAll();

  const result = await request;
  console.log('result.value', result);
  return result
};

  //console.error('getDb not implemented');
export const postDB = async ()


initdb();
