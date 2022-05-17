import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveAs } from 'file-saver';
import axios from 'axios';
import { YoutubeVideo, DownloadVideo } from '../store/actions/YoutubeAction';

function Home() {
    const dispatch = useDispatch();
    const { basic, audioFormats, videoFormats, loading } = useSelector((state)=>state.YoutubeReducer);
    const [url, setUrl] = useState("");
    const handleInputs = (e) =>{
        setUrl(e.target.value);
    }
    const handlePaste = (e) =>{
        dispatch(YoutubeVideo({url: e.clipboardData.getData('Text')}));
    }
    // console.log(videoFormats)
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(YoutubeVideo({url}));
    }
    const downloadImage = (url) =>{
        // dispatch(DownloadVideo({url}));
        // console.log(url)
        // saveAs('https://cors-anywhere.herokuapp.com/'+url, 'Hasan.mp4');
        // axios.get(url, { headers:{'Cache-Control':'no-cache','Accept-Language':'en','Content-Type':'application/json','Access-Control-Allow-Origin':'*'}, responseType:'blob'}).then(function(response){
        //     console.log(response);
        // })
        // var xhr = new XMLHttpRequest();
        //     xhr.open('GET', 'https://via.placeholder.com/150/allow-cors', true);
        //     xhr.responseType = 'blob';
        //     xhr.withCredentials = true;
        //     xhr.onload = function() {
        //       var urlCreator = window.URL || window.webkitURL;
        //       var imageUrl = urlCreator.createObjectURL(this.response);
        //       var tag = document.createElement('a');
        //       tag.href = imageUrl;
        //       tag.target = '_blank';
        //       tag.download = 'sample.png';
        //       document.body.appendChild(tag);
        //       tag.click();
        //       document.body.removeChild(tag);
        //     };
        //     xhr.onerror = err => {
        //       alert('Failed to download picture');
        //     };
        //     xhr.send();
    }
  return (
    <>
       <div className="video_container">
            <div className="container">
                <div className="video">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="intro-h1">Youtube Downloader</h1>
                    </div>
                </div>
                <div className="row">
                    <div id="divInput" className="text-center">
                    <form onSubmit={handleSubmit}>
                        <input id="txtUrl" onPaste={handlePaste} name="url" type="text" onChange={handleInputs} placeholder="Paste Youtube link" autoComplete="off"/>
                        <button type="submit" value="Start" id="btnSubmit">
                        <span className="start-btn">Start</span><i class="fa fa-long-arrow-right" aria-hidden="true"></i><span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
                        </button>
                    </form>
                        <p className="text-center pt-5">By using our service you are accepting our <a href="/tos.html">terms of service.</a></p>
                        {loading?<div id="imgAnalyzer">
                            <img alt="youtube video downloader is loading" src="/assets/images/loading2.gif"/>
                        </div>:''}
                    </div>
                    {!loading && basic?<div className="video_content_area row">
                        <div className="col-md-6">
                            <div id="info">
                                <div id="divThumbnail">
                                    <img id="thumbnail" class="thumnail-img" src={`https://i.ytimg.com/vi_webp/${basic.videoId}/maxresdefault.webp`}/>
                                </div>
                                <div id="videoTitle" class="text-center"><b>{basic.title}<br/>Duration: 00:52 minutes </b></div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Video</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Audio</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <table className="tableVideo text-center" border="1">
                                        <tbody>
                                            <tr>
                                                <th>Quality</th>
                                                <th>File Size</th>
                                                <th>Status</th>
                                            </tr>
                                            {
                                                videoFormats.map((video,index)=>(
                                                    <tr key={index}>
                                                        <td>(.mp4) {video.qualityLabel}</td>
                                                        <td>7.2 MB</td>
                                                        {/* <td><button><a title={basic.title} href={`${video.url}`}  style={{textDecoration: 'none'}} download="video.mp4"><i class="fa-solid fa-download"></i>Download</a></button></td> */}
                                                        <td><button><a href={`${video.url}&title=Y2Mate.is`} title={basic.title} target="_blank"   style={{textDecoration: 'none'}}><i class="fa-solid fa-download"></i>Download</a></button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <table className="tableVideo text-center" border="1">
                                        <tbody>
                                            <tr>
                                                <th>Quality</th>
                                                <th>File Size</th>
                                                <th>Status</th>
                                            </tr>
                                            <tr>
                                                <td>(.mp4) 720p</td>
                                                <td>7.2 MB</td>
                                                <td>Convert</td>
                                            </tr>
                                            <tr>
                                                <td>(.mp4) 720p</td>
                                                <td>7.2 MB</td>
                                                <td>Convert</td>
                                            </tr>
                                            <tr>
                                                <td>(.mp4) 720p</td>
                                                <td>7.2 MB</td>
                                                <td>Convert</td>
                                            </tr>
                                            <tr>
                                                <td>(.mp4) 720p</td>
                                                <td>7.2 MB</td>
                                                <td>Convert</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>:''}
                </div>
                
              </div>
            </div>
        </div>
        <section className="text-section mt-10">
            <div className="container">
                <div className="row">
                <div class="col-md-12 text-center">
                    <h2 class="intro-h2">Best Youtube Video Downloader</h2>
                    <p class="intro-text">TubeMate Youtube downloader is the best online video downloader tool that allows you to convert and download videos and audios from youtube for free and in the best available quality. Y2Mate is the ultimate tool to download unlimited youtube videos without any need for registration. You can easily convert and download thousands of videos and music files directly from youtube and other websites. We support all audio and video formats like MP3, MP4, M4V, FLV, WEBM, 3GP, WMV, AVI, etc., and the most amazing thing, it's completely free!</p>
                </div>
                </div>
                <hr/>
                <div class="row">
                <div class="col-md-7">
                    <h3><b>How to Download Youtube videos?</b></h3>
                    <div class="features">
                        <ul class="itemstyle">
                            <li>Open Youtube and copy the Youtube video URL you want to download.</li>
                            <li>Paste the Youtube video URL in the Search box, Tool will fetch video info.</li>
                            <li>Select the (Video/Audio) format you need and click the "Convert" button.</li>
                            <li>After the conversion is successfully completed, click the "Download" button.</li>
                            <li>Once the video is downloaded, you can play it whenever and wherever you want.</li>
                        </ul>
                    </div>
                    </div>
                    <div class="col-md-5">
                        <h3><b>Why use TubeMate Youtube Downloader?</b></h3>
                        <div class="features">
                            <ul class="itemstyle">
                                <li>Unlimited Conversions, so you can convert all your videos</li>
                                <li>High-Speed encoding to convert your videos faster!</li>
                                <li>Unlimited Downloads, convert as much as you can!</li>
                                <li>No Signup required, our service is totally free</li>
                                <li>Support Downloading multiple formats, e.g. MP4 and MP3</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="row pt-5">
                    <div class="col-md-4 text-center">
                    <i class="fa fa-refresh" aria-hidden="true"></i>
                    <h4><b>Unlimited Conversions</b></h4>
                    <p>TubeMate offers unlimited conversions of youtube videos to mp3 and mp4.</p>
                    </div>
                    <div class="col-md-4 text-center">
                    <i class="fa fa-download" aria-hidden="true"></i>
                    <h4><b>Auto Fetch data from Youtube</b></h4>
                    <p>We automatically fetch data from Youtube, you just have to copy and paste the youtube URL.</p>
                    </div>
                    <div class="col-md-4 text-center">
                    <i class="fa fa-user" aria-hidden="true"></i>
                    <h4><b>No Registration Required</b></h4>
                    <p>You don't need to log in or register to convert and download youtube videos to mp4 and mp3 format.</p>
                    </div>
                    <div class="col-md-4 text-center second-line">
                    <i class="fa fa-bolt" aria-hidden="true"></i>
                    <h4><b>Faster Video Conversion</b></h4>
                    <p>We use the latest technologies for encoding system, so you don't have to wait much for the conversion.</p>
                    </div>
                    <div class="col-md-4 text-center second-line">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <h4><b>Browser Compatibility</b></h4>
                    <p>TubeMate is fully compatible with the latest browsers like Chrome, Firefox, Safari, Microsoft Edge, etc.</p>
                    </div>
                    <div class="col-md-4 text-center second-line">
                    <i class="fa fa-mobile" aria-hidden="true"></i>
                    <h4><b>Completely Mobile friendly</b></h4>
                    <p>Our site can be used on any device to download your favorite youtube videos to mp4 and mp3.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Home