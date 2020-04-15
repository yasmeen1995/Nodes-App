const chalk = require('chalk')
const yargs = require('yargs')
const validator = require('validator')
const notes =  require('./notes.js') // this is an obj with two properties from notes.js

//Create add commend
yargs.command ({
    command: 'add',
    describe: 'Add a new note!',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){  //ES6 syntax
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command:
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){  // ES6 syntax
        notes.removeNote(argv.title)
    }
})


//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note!',
    builder: {
        title: {
            descripe: 'Read Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){  //ES6 syntax
        notes.readNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Lits of notes',
    handler () {  //ES6 syntax
        notes.listNotes()
    }
})

//console.log(yargs.argv)
yargs.parse()