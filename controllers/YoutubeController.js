const fs = require("fs");
const  FileSaver = require('file-saver');
const ytdl = require("ytdl-core");

module.exports.fetchVideo = async (req, res) =>{
     const { url } = req.body;
     try {
          if(ytdl.validateURL(url)){
               let info = await ytdl.getInfo(url);
               let basicinfo = await ytdl.getBasicInfo(url)
               let basic = {title: basicinfo.videoDetails.title ,videoId: basicinfo.videoDetails.videoId, length: basicinfo.videoDetails.lengthSeconds};
               // console.log(basicinfo.videoDetails.lengthSeconds)
               let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
               let videoFormats = ytdl.filterFormats(info.formats, 'videoandaudio');
               return res.status(200).json({basic, audioFormats, videoFormats});
          }
          else{
               return res.status(500).json({errors: "Error"});
          }
     } catch (error) {
          return res.status(500).json({errors: error.message});
     }
     
}

module.exports.downloadVideo = async(req, res) =>{
     const { url } = req.body;
     console.log(url)
     FileSaver.saveAs(url, "image.mp4");
}