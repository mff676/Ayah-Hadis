import axios from "axios"

const getQuranList = async (setData, type, detail="") => {
    const listQuran = await axios.get(`${import.meta.env.VITE_QURAN_URL}${type}/${detail}`)
    setData(listQuran.data.data);
}

const getHadistList = async(setData, value="") => {
    const listHadist = await axios.get(`${import.meta.env.VITE_HADIST_URL}hadith/${value}`)
    setData(listHadist.data)
}

const getYoutubeList = async(setData, channelId="", q="") => {
    const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/search?channelId=${channelId}&q=${q}&part=snippet&maxResults=20&type=video&key=${import.meta.env.VITE_YOUTUBE_APIKEY}`);
     setData(data)
}
const getVideoYoutube = async(setData, videoId) => {
    const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&key=${import.meta.env.VITE_YOUTUBE_APIKEY}&id=${videoId}`);
    setData(data.items[0])

}

export{
    getQuranList,
    getHadistList,
    getYoutubeList,
    getVideoYoutube
}