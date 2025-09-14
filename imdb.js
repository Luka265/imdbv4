class Movies {
    getMovieList() {
        let list = [
            {
                id : 1,
                name : '9 Strangers',
                description : 'X',
                photo : 'X',
                rating : 8.8
            },
            {
                id : 2,
                name : '9 String',
                description : 'X',
                photo : 'X',
                rating : 8.8
            },
            {
                id : 3,
                name : 'John Wick',
                description : 'X',
                photo : 'X',
                rating : 8.8
            },
            {
                id : 4,
                name : 'Detective',
                description : 'X',
                photo : 'X',
                rating : 8.8
            },
            {
                id : 5,
                name : 'DeptQ',
                description : 'X',
                photo : 'X',
                rating : 8.8
            },
            {
                id : 6,
                name : 'Clarkson',
                description : 'strangers',
                photo : 'X',
                rating : 8.8
            },
        ]
        return list;
        
    }
    printMyName (firstName, lastName){
        console.log('Hello ' + firstName +' '+ lastName)
    }
    itemHtml (item) {
        let html = ''
        html += '<div class="card">'
        html += '<div class="card-body">'
        
        
        html += '<h6 class="card-title">'+item.id+'. '+item.name+'</h6>'
        
        
        html += '</div>'//end of card-body
        html += '</div>'//end of card
        
        
        
        
        console.log(html)
    }
    drawItem () {
        let list = this.getMovieList()
        this.itemHtml(list[5])
    }
}


var moviesobject = new Movies()   
moviesobject.drawItem()


/* moviesobject.printMyName('luka', 'ghana') */


// var newstring = 'luka'

// function printMyName (firstName, lastName){
//     console.log('Hello ' + firstName +' '+ lastName)
// }

// printMyName('luka', 'ghana')

