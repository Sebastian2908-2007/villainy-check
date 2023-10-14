/**import dexie to easily use indexedDb*/
import Dexie from 'dexie';

const clientDatabase =  new Dexie('moralityquiz');
clientDatabase.version(1).stores({
    product: '_id,productTitle,marketingCopy,quiz,price,type',
 
});

export default clientDatabase;