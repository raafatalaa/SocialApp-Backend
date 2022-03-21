import { Schema, model, syncIndexes } from 'mongoose';


const postSchema = new Schema({
    body: [{ type: String }],
    image: {type:Image, required:[false]},
    postedBy: {type: Schema.Types.ObjectId, ref: 'User'},
    date:{type:Date ,default:Date.now}
})


const Post = model('Post', postSchema);


export default Post;