import mongoose from "mongoose"

const PostSchema = mongoose.Schema({
    userId:{

        type: mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
    body:{
        type: string,
        require:true
        
    },
    likes:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now
        
    },
    updatedAt:{
        type:Date,
        default:Date.now
        
    },
    media:{
        type: string,
        default:''
        
    },
    active:{
        type: Boolean,
        default:true
    },
    fileType:{
      type: string,
      default:''  
    },
})

const Post =mongoose.model("Post",PostSchema)

export default  Post;