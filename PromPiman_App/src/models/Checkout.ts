export class Checkout {
    roomNumber: string;
    name: string;
    phone: string | number;
    arrivalTime: Date | number;
    departureDateTime: Date | number;
}

export const lstCheckout: Checkout[] =
    [
        {
            roomNumber: "425",
            name: "Woraput Sangchart",
            phone: "0857579229",
            arrivalTime: Date.now(),
            departureDateTime:Date.now() + 3,
        },
        {
            roomNumber: "405",
            name: "John Doe",
            phone: "0895579559",
            arrivalTime: Date.now(),
            departureDateTime: Date.now() + 3,
        },
    ]

