const fs = require('fs')
const chalk = require('chalk')

const addNote =  (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title=== title)
    
   
    
    if (!duplicateNote){
        // Adding new notes to the JSON list array 
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes) 
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.yellow.inverse('Note title taken!'))
    }
}


// Challenge
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title // notes to keep(non-duplicate)
    // })
    
    if (notesToKeep.length !== notes.length){
    console.log(chalk.green.inverse('Note removed!'))
    saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.inverse('No Note Found!'))}

}

// Listing Notes
const listNotes = () => { 
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach( (note) => {
        console.log(note.title)     
    })
}


//Challenge : read note
const readNote = (title) =>{
    const notes = loadNotes()
    const titleFilter= notes.find((note) => note.title===title )
    if (titleFilter){
        console.log(chalk.inverse(titleFilter.title))
        console.log(titleFilter.body)        
    } else {
        console.log(chalk.red.inverse('Note not found!!'))
    }
}



//Reusable code to save the data (here this func is taking arg as a array(notes)) 
const saveNotes =  (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

// loadNotes: reusable function
const loadNotes = () => { 
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } 
    catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

