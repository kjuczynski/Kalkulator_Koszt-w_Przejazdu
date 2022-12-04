class MainCar {
    constructor (car,kilometer,engine) {
        this.car = car
        this.kilometer = kilometer
        this.engine = engine
    }

    
    startPrice = () =>{
        if(this.car === '1'){
            return 10
        }
        if(this.car === '2'){
            return 55
        }     
        if(this.car === '3'){
            return 15
        }   
        return 25
    }
    

    kilometerPrice = () =>{
        if(this.car === '1'){
            return this.kilometer * 1.1
        }
        if(this.car === '2'){
            return this.kilometer * 3.5
        }
        if(this.car === '3'){
            return this.kilometer * 1.8
        }
        return this.kilometer * 2.5
        
    }

    enginePrice = () =>{
        if(this.engine === '1'){
            return this.kilometer * 0.2
        }
        if(this.engine === '2'){
            return this.kilometer * 0.49
        }
        if(this.engine === '3'){
            return this.kilometer * 0.1
        }
        if(this.engine === '4'){
            return this.kilometer * 0.05
        }
        return 0
    }
}
    



class People {
    constructor ( adults, childTo12Year, childOver12Year){
        this.adults = adults
        this.childTo12Year = childTo12Year
        this.childOver12Year = childOver12Year
    }

    adultPeoplePrice = () =>{
        console.log(this.adults)
        return this.adults * 5
    }
    
    childTo12YearPrice = () =>{
        return 0
    }

    childOver12YearPrice = () =>{
        return this.childOver12Year * 2.5
    }
   
} 

class Payment {
    carTypeSelectElement = document.querySelector('#carType')
    engineTypeSelectElement = document.querySelector('#engineType')               
    calculateButtonElement = document.querySelector('#calculate')
    resetButtonElement = document.querySelector('#reset')  
    kilometerInputElement = document.querySelector('#kilometer')
    peopleAdultElement = document.querySelector('#adult')
    peopleChildOver12Year = document.querySelector('#childOver12Year')
    peopleChildTo12Year = document.querySelector('#childTo12Year')
    result = document.querySelector('h2')
    carPrice = document.querySelector('#carPrice span')
    kilometerPrice = document.querySelector('#kilometerPrice span')
    enginePrice = document.querySelector('#enginePrice span')
    adultPrice = document.querySelector('#adultPrice')
    childTo12Year = document.querySelector('#childTo12YearPrice')
    childOver12Year = document.querySelector('#childOver12YearPrice')
    fuelCost = document.querySelector('#fuelCost')
    combustion = document.querySelector('#combustion')
    fuelCostScore = document.querySelector('#fuelCostScore')

    fuelCostPrice = () => {
      
        const fuelUsage = (this.kilometerInputElement.value * this.combustion.value) / 100
        const fuelCost = fuelUsage * this.fuelCost.value
        
        return this.fuelCostScore.innerText = `${fuelCost.toFixed(2)} zł`

    }

    calculatePrice = () => {
        const mainCar = new MainCar(this.carTypeSelectElement.value, this.kilometerInputElement.value, this.engineTypeSelectElement.value)
        if(this.carTypeSelectElement.value === '1' || this.carTypeSelectElement.value === '2' || this.carTypeSelectElement.value === '3'){
            const startPrice = mainCar.startPrice()
            const kilometerPrice = mainCar.kilometerPrice()
            const enginePrice = mainCar.enginePrice()
            const sumPriceMainCar = startPrice + kilometerPrice + enginePrice
            
            this.carPrice.innerText = `${startPrice.toFixed(2)} zł`
            this.kilometerPrice.innerText = `${kilometerPrice.toFixed(2)} zł`
            this.enginePrice.innerText = `${enginePrice.toFixed(2)} zł`
    
            this.fuelCostPrice()
            return this.result.innerText = `Koszt całkowity to : ${sumPriceMainCar.toFixed(2)} zł`
        }
        
        
        else{
            const startPrice = mainCar.startPrice()
            const kilometerPrice = mainCar.kilometerPrice()
            const enginePrice = mainCar.enginePrice()
            const sumPriceMainCar = startPrice + kilometerPrice + enginePrice

            const people = new People(this.peopleAdultElement.value, this.peopleChildOver12Year.value, this.peopleChildTo12Year.value)
            const priceAdult = people.adultPeoplePrice()
            const priceChildTo12 = people.childTo12YearPrice()
            const priceChildOver12 = people.childOver12YearPrice()
            const sumPricePeople = priceAdult + priceChildTo12 + priceChildOver12
            const sumPrice = sumPriceMainCar + sumPricePeople
      
            
            this.carPrice.innerText = `${startPrice.toFixed(2)} zł`
            this.kilometerPrice.innerText = `${kilometerPrice.toFixed(2)} zł`
            this.enginePrice.innerText = `${enginePrice.toFixed(2)} zł`
            this.adultPrice.innerText = `${priceAdult.toFixed(2)} zł`
            this.childTo12Year.innerText = `${priceChildTo12.toFixed(2)} zł`
            this.childOver12Year.innerText = `${priceChildOver12.toFixed(2)} zł`
            
            this.fuelCostPrice()
            return this.result.innerText = `Koszt całkowity to : ${sumPrice.toFixed(2)} zł`
        }
        
        
    }

    resetEvent = () =>{
        this.carTypeSelectElement.value = 1
        this.kilometerInputElement.value = ''
        this.engineTypeSelectElement.value = 1 
        this.kilometerInputElement.value = ''
        this.peopleAdultElement.value = ''
        this.peopleChildOver12Year.value = ''
        this.peopleChildTo12Year.value = ''
        this.result.innerText = ''
        this.fuelCostScore.innerText = ''
        this.combustion.value = ''
        this.fuelCost.value = ''
        

        this.carPrice.innerText = ''
        this.kilometerPrice.innerText = ''
        this.enginePrice.innerText = ''
        this.adultPrice.innerText = ''
        this.childTo12Year.innerText = ''
        this.childOver12Year.innerText = ''

       
    }


    initEvents = () =>{
        this.calculateButtonElement.addEventListener('click', this.calculatePrice)
        this.resetButtonElement.addEventListener('click',this.resetEvent)
    }
}


const payment = new Payment()
payment.initEvents()



