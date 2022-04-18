import { Schema, model, syncIndexes } from 'mongoose';
import moment from 'moment';



const postSchema = new Schema({
    body: { type: String },
    image: {type:String,contentType:'string',required:[false]},
    postedBy: {type: Schema.Types.ObjectId, ref: 'User'},
    userName:{type:String},
    date:{type:Date ,default: moment(new Date()).format("MMM DD, YYYY") }
})


const Post = model('Post', postSchema);


export default Post;