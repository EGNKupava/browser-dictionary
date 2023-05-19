import {idb} from 'some-database';
import {serializedData} from 'some-serialized-data';

import {importFromJson, clearDatabase} from 'idb-backup-and-restore.mjs';

clearDatabase(idb)
  .then(() => importFromJson(idb, serializedData))
  .then(() => {
    console.log('Successfully cleared database and imported data');
  })
  .catch((error) => {
    console.error('Could not clear & import database:', error);
  });
