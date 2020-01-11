class HashTable {
    constructor (size){
    // this array will hold info
        this.data = new Array(size);
    }
// generate a hash
_hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
    }
}

// only want 50 shelfs of memory
const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000);
// myHashTable.get('grapes');
console.log(myHashTable._hash('hello_world')) // 35