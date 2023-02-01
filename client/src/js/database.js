import { openDB } from 'idb';

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

export const putDb = async (content) => { console.log('putDb implemented'); // export function that we use to POST to database.

const jateDb = await openDB('jate', 1);  // create a connection to the database.

const tx = jateDb.transaction('jate', 'readwrite'); //create a new transaction and specify the database.

const store = tx.objectStore('jate'); // open up the desired onject store.

const request = store.put({id: 1, value: content}); // using .add() method to store.

const result = await request; //get confirmation of request.

console.log('Data changed!', result.value); //console log result.

};

export const getDb = async () => { console.error('getDb not implemented'); //export function that we use to GET info from database. 

const jateDb = await openDB('jate', 1)

const tx = jateDb.transaction('jate', 'readonly');

const store = tx.objectStore('jate');

const request = store.get(1);

const result = await request;

console.log('result.value', result);
return result?.value;

};

initdb();
