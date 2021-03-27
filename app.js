function fetchVideos() {
    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json; charset=UTF-8',
            Authorization: 'Bearer ca3f7b6843ae84b71da64b1d041c867f12b1aa0b'
        }
    };

    fetch('https://api.brid.tv/apiv3/video/all/18915.json?limit=25', options)
        .then(res => res.json())
        .then(
            response => {
                for (let i = 0; i <= response.data.length; i++) {
                    let videoContainer = document.createElement("article");
                    videoContainer.className += "video-container";
                    let thumbnail = document.createElement("a");
                    thumbnail.href = "#";
                    thumbnail.className += "thumbnail";
                    let videoSource = document.createElement('video');
                    videoSource.className += "video-source";
                    videoSource.controls = true;
                    videoSource.type = "video/mp4";
                    videoSource.src = `http:${response.data[i].Video.source.sd}`;
                    videoSource.poster = response.data[i].Video.thumb;
                    let videoDetails = document.createElement("div");
                    videoDetails.className += "video-details";
                    let videoTitle = document.createElement("a");
                    videoTitle.href = "#";
                    videoTitle.className += "video-title";
                    videoTitle.textContent = response.data[i].Video.name;


                    videoDetails.appendChild(videoTitle);
                    thumbnail.appendChild(videoSource);


                    videoContainer.appendChild(thumbnail);
                    videoContainer.appendChild(videoDetails);

                    document.getElementById("video-section").appendChild(videoContainer);
                }
            })
        .catch(err => console.error(err))
}

fetchVideos();
