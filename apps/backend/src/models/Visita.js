import mongoose from "mongoose";

const VisitaSchema = new mongoose.Schema({
    startDateTime: {
        type: Date,
        require: true,
    },
    endDateTime: {
        type: Date,
        require: true,
    },
    status: {
        type: String,
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
    numberVisitors: {
        type: String,
        require: false,
    },
    institution: {
        type: String,
        require: false,
    },
    message: {
        type: String,
        require: false,
    },
}, {timestamps: true});

const Visita = mongoose.model("Visita", VisitaSchema);

export default Visita;
