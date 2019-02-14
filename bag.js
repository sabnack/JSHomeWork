var Bag = function ( keyword ) {
    var money = 3000

    var documents = [
        "Паспорт",
        "Водительские права",
        "Диплом ВУЗа"
    ]
    var accessories = [
        "Ключи",
        "Билеты в кино",
        "Лекарство"
    ]
    this.content = null
    function getMoney ( sum ) {
        money -= sum
    }
    function putMoney(sum)
    {
        money += sum
    }
    this.payment = function ( sum ) {
        if ( prompt ( "ты кто?" ) !== keyword ) return "⛔️"
        getMoney ( sum )
        console.info ( 
           `Осталось денег в кошельке:
            ${money} грн` 
        )
        return `Уплачено: ${sum} грн`
    }
    
    this.rummage = function () {
        this.content = [
            documents,
            accessories,
            money
        ]
        console.log ( 
           `Протокол обыска.
            Содержимое сумочки:
            ${ this.content }`
        )
    }

    this.addMoney = function (sum)
    {
        if ( prompt ( "ты кто?" ) !== keyword ) return "⛔️"
        putMoney ( sum )
        console.info ( 
            `Осталось денег в кошельке:
             ${money} грн` 
         )
         return `Положено: ${sum} грн`
    }  

    this.PutInBag = function(someThing)
    {
        if ( prompt ( "Это документ?" ) == "yes" )
        {
            documents.push(someThing)
            console.info (`Положили документ ${someThing}`)
        } else
        {
            accessories.push(someThing)
            console.info (`Положили аксессуар ${someThing}`)
        }
        
    }

    function getFromBag(someThing)
    {
        for(var x in documents)
        {
            if(documents[x] == someThing) {
               
                documents.splice(x,1)
                return console.info (`Вы взяли ${someThing}`)
            }
            if(accessories[x] == someThing) {
               
                accessories.splice(x,1)
                return console.info (`Вы взяли ${someThing}`)
            }
        }
    }
    this.GetFromBag = function(someThing)
    {
        if ( prompt ( "ты кто?" ) !== keyword ) return "⛔️"
        getFromBag(someThing)
    }
 }

 var myCase = new Bag ( 'Я' )