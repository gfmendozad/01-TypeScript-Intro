export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'German'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth']
}

const returnChildrenNumber = ( passanger: Passenger ): number => {

if(!passanger.children) return 0;

    const howManyChildren = passanger.children!.length;

    console.log(passanger.name, howManyChildren);

    return howManyChildren;
} 

returnChildrenNumber( passenger1 );