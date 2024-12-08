import mongoose from "mongoose";

const VisitaSchema = new mongoose.Schema({
    date: {
        type: Date,
        require: true,
    },
    startTime: {
        type: Date,
        require: true,
    },
    endTime: {
        type: Date,
        require: true,
    },
    nameVisitor: {
        type: String,
        require: false,
    },
    emailVisitor: {
        type: String,
        require: false,
    },
    phoneVisitor: {
        type: String,
        require: false,
    },
    Institution: {
        type: String,
        require: false,
    }
});

const Visita = mongoose.model("Visita", VisitaSchema);

export default Visita;
