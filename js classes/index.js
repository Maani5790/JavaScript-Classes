class costumer{
    constructor(n){
        this.name = n;
    }
    buy(){
        console.log(this.name)
    }
}

let constumer1 = new costumer("maani")
console.log(constumer1);

constumer1.buy()