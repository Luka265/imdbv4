class Movies {
    getMovieList() {
        let list = [
            {
                id : 1,
                name : '9 Strangers',
                description : 'Theres 9 strangers',
                photo : 'image1',
                rating : 8.5
            },
            {
                id : 2,
                name : '9 String',
                description : '9 strings in air',
                photo : 'image2',
                rating : 6.8
            },
            {
                id : 3,
                name : 'John Wick',
                description : 'His dog dies',
                photo : 'image3',
                rating : 3.8
            },
            {
                id : 4,
                name : 'Detective',
                description : '2 true detectives',
                photo : 'image4',
                rating : 10.0
            },
            {
                id : 5,
                name : 'DeptQ',
                description : 'deptq description',
                photo : 'image5',
                rating : 4.3
            },
            {
                id : 6,
                name : 'Clarkson',
                description : 'strangers',
                photo : 'image6',
                rating : 7.8
            },
        ]
        return list;
        
    }
    itemHtml (item) {
        let html = ''
        html += '<div class="card">'
        html += '<div class="card-body">'
        html += '<div class="d-flex align-items-center me-4"><i class="fa-solid fa-star star-system me-1" style="color: #FFD43B;">'
        
            html += '<span class="text-light">'+item.rating+'</span>'
        
        html += '</i></div>'//end of rating

            html += '<h6 class="card-title">'+item.id+'. '+item.name+'</h6>'
        html += '<div class="d-flex flex-column justify-content-between align-items-center">' //start of button container

            html += '<button type="button" class="btn btn-outline-secondary watchlist text-primary rounded-pill border-dark" style="background-color: rgb(63, 63, 63);"><i class="fa-solid fa-arrow-up-right-from-square me-2"></i>Watch Now</button>'
            html += '<button type="button" class="btn btn-outline-secondary trailer-btn my-2 border-0 btn-sm rounded-pill"><i class="fa-solid fa-play play-icon me-2"></i>Trailer</button>'
        html += '<div class="d-flex justify-content-between">' //start of star container
             html += '<button type="button" class="btn btn-sm"><i class="fa-regular fa-star star-fav"></i></button>'
             html += '<button type="button" class="btn btn-sm"><i class="fa-regular fa-star star-fav"></i></button>'
             html += '<button type="button" class="btn btn-sm"><i class="fa-regular fa-star star-fav"></i></button>'
             html += '<button type="button" class="btn btn-sm"><i class="fa-regular fa-star star-fav"></i></button>'
             html += '<button type="button" class="btn btn-sm"><i class="fa-regular fa-star star-fav"></i></button>'
        html += '</div>' //end of star container
        html += '</div>' //end of button container
        html += '</div>'//end of card-body
        html += '</div>'//end of card
                
        
        
        console.log(html)
    }
    drawItem (item) {
        let list = this.getMovieList()
        this.itemHtml(item)
    }
    drawitems () {
        let array = this.getMovieList()
        array.forEach((item, index) => {
        console.log (item, index)
        this.drawItem(item);
    })
        
        }   
        //aq unda gamovidzaxot listi (filmebis masivi getmovielist-it)
        //aq unda gaketdes cikli anu interaqciebi js loop through array (aqaa sxvadasxva funqcia arraystvis da sxva aris obieqtistvis)
        //ramdeni obieqticaa ciklshi imdeni qmedeba unda iyos ciklshic
        //console logit galoge index da item (unda gailogos ise ro ramdenicaa index imdeni dagvibrunos chavagdot this.drawitem,)
        
    }


var moviesobject = new Movies()   
moviesobject.drawitems()


/* moviesobject.printMyName('luka', 'ghana') */


// var newstring = 'luka'

// function printMyName (firstName, lastName){
//     console.log('Hello ' + firstName +' '+ lastName)
// }

// printMyName('luka', 'ghana')
/* printMyName (firstName, lastName){
        console.log('Hello ' + firstName +' '+ lastName)
    } */
