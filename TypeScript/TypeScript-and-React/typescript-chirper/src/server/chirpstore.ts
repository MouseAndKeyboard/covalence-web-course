import fs from 'fs';
let chirpsStore: { chirps: Array<IChirp>, nextid: number } = { chirps: [], nextid: 0 }

if(fs.existsSync('chirps.json')) {
    
    chirpsStore = JSON.parse(fs.readFileSync('chirps.json').toString('UTF-8'));
}

let getChirps = () => {
    return Object.assign({}, chirpsStore.chirps); //create a copy and return it
}

let getChirp = (id: number) => {
    let chirp : IChirp = Object.assign({}, chirpsStore.chirps[id]); //create a copy and return it
    return chirp;
}

let createChirp = ({author, message}: {author: string, message: string}) => {
    let id = chirpsStore.nextid++;
    chirpsStore.chirps.push({id, author, message});
    writeChirps();
};

let updateChirp = (id : number, chirp: IChirp) => {
    let index = chirpsStore.chirps.findIndex(elem => elem.id === id);
    chirpsStore[index] = chirp;
    writeChirps();
}

let deleteChirp = (id: number) => {
    delete chirpsStore[id];
    writeChirps();
}

let writeChirps = () => {
    fs.writeFileSync('chirps.json', JSON.stringify(chirpsStore));
};

export interface IChirp {
    id: number,
    author: string,
    message: string
}

export default {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
}