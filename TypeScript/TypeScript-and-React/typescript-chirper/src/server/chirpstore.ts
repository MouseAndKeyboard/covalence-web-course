import fs from 'fs';
let chirps = { nextid: 0 };

if(fs.existsSync('chirps.json')) {
    
    chirps = JSON.parse(fs.readFileSync('chirps.json').toString('UTF-8'));
}

let getChirps = () => {
    return Object.assign({}, chirps); //create a copy and return it
}

let getChirp = (id: number) => {
    let chirp : IChirp | {nextid: number} = Object.assign({}, chirps[id]); //create a copy and return it
    return chirp;
}

let createChirp = (chirp: IChirp) => {
    chirps[chirps.nextid++] = chirp;
    writeChirps();
};

let updateChirp = (id : number, chirp: IChirp) => {
    chirps[id] = chirp;
    writeChirps();
}

let deleteChirp = (id: number) => {
    delete chirps[id];
    writeChirps();
}

let writeChirps = () => {
    fs.writeFileSync('chirps.json', JSON.stringify(chirps));
};

export interface IChirp {
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