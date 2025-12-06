export type MenuItem = {    // type de los elementos del menu
    id: number;
    name: string;
    price: number;
}

export type OrderItem = MenuItem & {    // type de los elementos seleccionados, heredan de menuitem
    quantity: number;   
}