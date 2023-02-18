const Post = require("../models/Post");
const User = require("../models/User");

exports.createPost = async (req, res) => {
  try {
    
    const newPostData = {
      caption: req.body.caption,
      image: {
        public_id: "myCloud.public_id",
        url: "myCloud.secure_url",
      },
      owner: req.user._id,
    };

    const post = await Post.create(newPostData);

    const user = await User.findById(req.user._id);

    user.posts.unshift(post._id);

    await user.save();
    res.status(201).json({
      success: true,
      message: "Post created",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deletePost = async (req,res)=>{
  try {
    const post =  await Post.findById(req.params.id);
  if(!post){
   return res.status(404).json({
      success:false,
      message:"Post does not Found"
    })
  }
  if(post.owner.toString() !== req.user._id.toString()){
   return res.status(401).json({
    success:false,
    message:"Unauthorized"
   })
  }
  await post.remove();
  const user = await User.findById(req.user._id);
  const index = user.posts.indexOf(req.params.id);
  user.posts.splice(index, 1);

    await user.save();

    res.status(200).json({
      success: true,
      message: "Post deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  
}
