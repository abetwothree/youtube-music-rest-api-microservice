const YoutubeMusicApi = require('youtube-music-api')

async function initialize(){
    const api = new YoutubeMusicApi()
    const info = await api.initalize() // Retrieves Innertube Config
    console.log('YT Info', info);
    return api;
}

class YTMusicAPI{
    constructor(){}
    async init(){
        this.api = await initialize();
    }
    async getSearchSuggestions(request){
        try{
            return await this.api.getSearchSuggestions(request.query.query);
        }catch(e){
            console.log(e);
            return {error: e.message};
        }
    }
    async search(request){
        try{

            let category = null;
            if(request.query.category){
                category = request.query.category;
            }

            return await this.api.search(request.query.query, category);
        }catch(e){
            console.log(e);
            return {error: e.message};
        }
    }
    async getSong(request){
        try{
            return await this.api.getSong(request.params.id);
        }catch(e){
            console.log(e);
            return {error: e.message, e};
        }
    }
    async getArtist(request){
        try{
            return await this.api.getArtist(request.params.id);
        }catch(e){
            console.log(e);
            return {error: e.message};
        }
    }
    async getAlbum(request){
        try{
            return await this.api.getAlbum(request.params.id);
        }catch(e){
            console.log(e);
            return {error: e.message};
        }
    }
    async getPlaylist(request){
        try{
            return await this.api.getPlaylist(request.params.id);
        }catch(e){
            return {error: e.message};
        }
    }
}

module.exports = YTMusicAPI;