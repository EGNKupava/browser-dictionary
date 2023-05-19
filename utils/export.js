import {idb} from 'some-database';

import {exportToJson} from 'idb-backup-and-restore.mjs';

exportToJson(idb)
  .then((result) => {
    console.log('Exported JSON string:', result);
  })
  .catch((error) => {
    console.error('Something went wrong during export:', error);
  });
