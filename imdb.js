class MovieList {
  constructor() {
    this.movies = [
      {
        id: 1,
        name: "9 strangers",
        description: "The nine strangers are city dwellers who gather at the luxury health resort Tranquillum House for a 10-day retreat seeking healing, transformation, and escape from their stressed lives, only to find themselves subjected to Masha's unorthodox, and potentially dangerous, methods under the guise of wellness.",
        photo: "X",
        rating: 8.8
      },
      {
        id: 2,
        name: "9string",
        description: "stringy movie",
        photo: "X",
        rating: 8.8
      },
      {
        id: 3,
        name: "9 strangers",
        description: "lorem",
        photo: "X",
        rating: 8.8
      },
      {
        id: 4,
        name: "9 strangers",
        description: "lorem",
        photo: "X",
        rating: 8.8
      },
      {
        id: 5,
        name: "9 strangers",
        description: "lorem",
        photo: "X",
        rating: 8.8
      },
      {
        id: 6,
        name: "John wick",
        description: "lorem",
        photo: "X",
        rating: 8.8
      }
    ];
  }
  getmovielist() {
    return this.movies;
  }
  itemHtml (movies){
    return <div class="card">
                    
                        <div class="card-body">
                                <div class="d-flex align-items-center me-4"><i class="fa-solid fa-star star-system me-1" style="color: #FFD43B;"></i><span class="text-light">8.6</span></div>
                            <h6 class="card-title">1. 9 Strangers</h6>
                            <div class="d-flex flex-column justify-content-between align-items-center">
                                <button type="button" class="btn btn-outline-secondary watchlist text-primary rounded-pill border-dark" style="background-color: rgb(63, 63, 63);"><i class="fa-solid fa-arrow-up-right-from-square me-2"></i>Watch Now</button>
                                <button type="button" class="btn btn-outline-secondary trailer-btn my-2 border-0 btn-sm rounded-pill"><i class="fa-solid fa-play play-icon me-2"></i>Trailer</button>
                                <div class="d-flex justify-content-between">
                                    <button type="button" class="btn btn-sm"><i class="fa-regular fa-star star-fav"></i></button>
                                    <button type="button" class="btn btn-sm"><i class="fa-regular fa-star star-fav"></i></button>
                                    <button type="button" class="btn btn-sm"><i class="fa-regular fa-star star-fav"></i></button>
                                    <button type="button" class="btn btn-sm"><i class="fa-regular fa-star star-fav"></i></button>
                                    <button type="button" class="btn btn-sm"><i class="fa-regular fa-star star-fav"></i></button>
                                </div>
                            </div>
                        
                    </div>
                </div>
  }
/* const movies = [
    {
        id: 1,
        name: "9 strangers",
        description: "The nine strangers are city dwellers who gather at the luxury health resort Tranquillum House for a 10-day retreat seeking healing, transformation, and escape from their stressed lives, only to find themselves subjected to Masha's unorthodox, and potentially dangerous, methods under the guise of wellness.",
        photo: "X",
        rating: 8.8
    },   
    {
        id: 2,
        name: "9string",
        description: "stringy movie",
        photo: "X",
        rating: 8.8
    },
    {
        id: 3,
        name: "9 strangers",
        description: "lorem",
        photo: "X",
        rating: 8.8
    },
    {
        id: 4,
        name: "9 strangers",
        description: "lorem",
        photo: "X",
        rating: 8.8
    },   
    {
        id: 5,
        name: "9 strangers",
        description: "lorem",
        photo: "X",
        rating: 8.8
    },   
    {
        id: 6,
        name: "John wick",
        description: "lorem",
        photo: "X",
        rating: 8.8
    }     
] */
}