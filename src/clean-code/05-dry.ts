
type Size = 'small' | 'medium' | 'large' | '';

class Product {
    constructor(
        public name:string = '', 
        public price: number = 0,
        public size:Size = ''
        ) {
    }

    toString(){
        if (!this.isProductReady()) throw new Error("Product is not ready");
        return `Product name: ${this.name}, price: ${this.price}, size: ${this.size}`;
    }

    isProductReady(): boolean {
        for( const key in this ){
            switch (typeof this[key]) {
                case 'string':
                    if ( (<string><unknown>this[key]).length <= 0) throw new Error(`The ${key} of the product is required`);
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw new Error(`The ${key} of the product is required`);
                    break;
                default:
                    throw new Error(`${ typeof this[key]} is not supported.`);
                    break;
            }
        }

        return true;

    }




}

(() => {
    const bluePants = new Product('Blue large pants', 10, 'medium');
    console.log(bluePants.toString());
})();