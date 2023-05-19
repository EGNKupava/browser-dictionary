import {idb} from 'some-database';
import {serializedData} from 'some-serialized-data';

import {importFromJson} from 'idb-backup-and-restore.mjs';

importFromJson(idb, serializedData)
  .then(() => {
    console.log('Successfully imported data');
  })
  .catch((error) => {
    console.error('Something went wrong during import:', error);
  });
