const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Petition = new Schema({
        city: {
            type: string
        },
        day: {
            type: number
        },
        month: {
            type: string
        }
    },
    {
        collection: 'Petition'
    }
);