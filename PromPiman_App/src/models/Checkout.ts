export class Checkout {
    roomNumber: string;
    name: string;
    phone: string | number;
    arrival: any;
}

export const lstCheckout: Checkout[] =
    [
        {
            roomNumber: "425",
            name: "Woraput Sangchart",
            phone: "0857579229",
            arrival: Date.now(),
        },
        {
            roomNumber: "405",
            name: "John Doe",
            phone: "0895579559",
            arrival: Date.now(),
        },
    ]

