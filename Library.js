var LibraryBook = function(title, year,author)
{
    var title
    var year
    var author
    var readerName
    var readerData

    this.AddBook = function()
    {
        title=prompt ( "Название книги" ) 
        do{
        year=prompt ( "Год" ) 
        } while (year>2019)
        author=prompt ( "Автор" ) 
    }

    this.GetBookInfo = function()
    {
        if(readerName == undefined) {
            console.info (title, year, author, "Доступна для чтения")
        }
        else {
        console.info("Книгу взял ",readerName)
        }
    }

    function giveTheBook(client)
    {
        readerName = client
        var currentdate = new Date(); 
        readerData = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes();
    }

    this.getTheBook = function(client)
    {
        if(readerName == undefined)
        {   
            giveTheBook(client)
            return title
        }
        else {
            return null
            }
    }

    this.returnBook = function()
    {
        readerName = undefined
        readerData = undefined
    }
}
var myBook = new LibraryBook("MeinKampf","1935","Hitler")