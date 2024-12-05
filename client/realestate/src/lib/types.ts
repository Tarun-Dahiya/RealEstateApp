//type definitions for the application

export class User {
    USERID: number = 0;
    USERNAME: string = '';
    USERFULLNAME: string = '';
    USEREMAIL: string = '';
    USERPHONE_1: string = '';
    USERPHONE_MOBILE: string = '';
    DATECREATED: Date = new Date();
    AVATAR: string = '';
}

export interface Property {
    id: number;
    name: string;
    price: number;
    location: string;
    image: string;
    description: string;
    type: string;
}
