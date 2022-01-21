export class Product {

    constructor(
        public productId: number,
        public name: string,
        public price: number,
        public brand:string,
        public rating:number,
        public description: string,
        public category:string,
        public productImg: string
    ) { }
}
