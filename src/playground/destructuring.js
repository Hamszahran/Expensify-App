//const book = {
//    titile: 'Ego is the enemy',
//    author: 'Ryan',
//    publisher: {
//    name: 'Penguin'

//    }
//}

//const {name: publisherName = 'self-published'} = book.publisher;

//console.log (publisherName);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName , ,mediumPrice] = item;
console.log(`A Medium ${itemName} costs ${mediumPrice}`);