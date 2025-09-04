class Movies{
    getMovieList (){
       function Movie(id, name, description, photo, rating) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.photo = photo;
        this.rating = rating;
       }
    
       const strangers = new Movie("127", "9Stranger", "Description", "X", "4.8")
       return strangers.name + strangers.id + strangers.rating
    }

}