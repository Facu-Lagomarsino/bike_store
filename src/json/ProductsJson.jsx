export const productsJson = [
    {
        id: "1",
        description: "Carbono Future White",
        image: require("../img/bike1.jpg").default,
        category: "career",
        price: 3500,
        initial: 1,            
        stock: 7
    },
    {
        id: "2",
        description: "Carbono Future Black",
        image: require("../img/bike2.jpg").default,
        category: "career",
        price: 3700,
        initial: 1,  
        stock: 10 
    },
    {
        id: "3",
        description: "Fixie Urban-1",
        image: require("../img/bike3.jpg").default,
        category: "street",
        price: 1500,
        initial: 1,
        stock: 10 
    },
    {
        id: "4",
        description: "Fixie Urban-2",
        image: require("../img/bike4.jpg").default,
        category: "street",
        price: 1700,
        initial: 1, 
        stock: 6
    },
    {
        id: "5",
        description: "Best Old School-1",
        image: require("../img/bike5.jpg").default,
        category: "vintage",
        price: 2200,
        initial: 1,
        stock: 8
    },
    {
        id: "6",
        description: "Best Old School-2",
        image: require("../img/bike6.jpg").default,
        category: "vintage",
        price: 2500,
        initial: 1, 
        stock: 4 
    },
    {
        id: "7",
        description: "Best Old School-3",
        image: require("../img/bike7.jpg").default,
        category: "vintage",
        price: 2500,
        initial: 1, 
        stock: 4 
    },
    {
        id: "8",
        description: "Best Mountain Bike-1",
        image: require("../img/bike8.jpg").default,
        category: "mountain",
        price: 3350,
        initial: 1, 
        stock: 8 
    },
    {
        id: "9",
        description: "Best Mountain Bike-2",
        image: require("../img/bike9.jpg").default,
        category: "mountain",
        price: 3500,
        initial: 1, 
        stock: 7 
    },
    {
        id: "10",
        description: "Best Mountain Bike-3",
        image: require("../img/bike10.jpg").default,
        category: "mountain",
        price: 2550,
        initial: 1, 
        stock: 7 
    }
];

export const getData = new Promise( (res,rej)=> {
    //acciones
    let condition= true
    if (condition) {
        setTimeout(()=>{
            res(productsJson)        
        }, 2000)
    }else{
        rej('404 not found')
    }
} )
