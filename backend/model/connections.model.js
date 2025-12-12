import mongoose from "mongoose";

const connectionRequest= new mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    ConnectionId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    status_accepted:{
        type:Boolean,
        default:null
    }
})

const connectionRequest = mongoose.model("connectionRequest",connectionRequest);
export default connectionRequest;