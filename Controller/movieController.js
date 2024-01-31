const movies = require('../Model/movieSchema')

//logic to upload movie
exports.uploadMovieController = async(req,res)=>{
    console.log('inside movie controller logic');
    const {title,poster,coverimg,rated,released,runtime,genre,director,actors,languages,plot} = req.body

    console.log(`${title},${poster},${coverimg},${rated},${released},${runtime},${genre},${director},${actors},${languages},${plot}`);

    try {
        const existingMovie = await movies.findOne({title})
        if(existingMovie){
            res.status(406).json(`${title} already exist...`)
        }
        else{
            const newMovie = new movies({
                title,
                poster,
                coverimg,
                rated,
                released,
                runtime,
                genre,
                director,
                actors,
                languages,
                plot
            })
            await newMovie.save()
            res.status(200).json(newMovie)
        }
    } catch (err) {
        res.status(401).json(`request failed due to ${err}`)
    }


}

//logic to get movie
exports.getAllMovieController = async(req,res)=>{
    try {
        const allMovies = await movies.find()
        res.status(200).json(allMovies)

    } catch(err){
        res.status(401).json(`Request Failed due to ${err}`)
    }
}