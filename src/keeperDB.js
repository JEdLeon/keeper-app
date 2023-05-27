import mongoose from "mongoose"

const atlasDB = `${process.env.REACT_APP_ATLASDB}/keeperDB`;
async function main() {
  await mongoose.connect(atlasDB);
}
main().catch(error => {console.log(error)});

const noteSchema = new mongoose.Schema({
  id: Number,
  title: String,
  content: String
})

const NoteModel = mongoose.model("Note", noteSchema);

function AllNotes() {
    NoteModel.find({}).then(docs => {
        return docs;
    }).catch(error => {
        return [];
    });
}

export {AllNotes};
export {atlasDB};