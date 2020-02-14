export class Member {
    _id: string;
    idNumber: string;
    tHName: string;
    eNName: string;
    dateOfBirth: Date;
    address: string;
    dateOfIssue: Date;
    dateOfExpiry: Date;
    picture: string;
    phoneNumber: string;
    signature: string;
    creationDateTime: Date;
    lastUpdate: Date;
}

export const MemberLst: Member[] =
    [
        {
            _id: "0001",
            idNumber: "0123456789123",
            tHName: "นายกฤษณะ ตระกูลพรหม",
            eNName: "Kritsana Tragoolphrom",
            dateOfBirth: null,
            address: null,
            dateOfIssue: null,
            dateOfExpiry: null,
            picture: "../../assets/imgs/man.png",
            phoneNumber: "0837325693",
            signature: null,
            creationDateTime: null,
            lastUpdate: null,
        },
        {
            _id: "0002",
            idNumber: "0123456789123",
            tHName: "นายวรพุทธิ์ แสงชาติ",
            eNName: "Woraput SangChart",
            dateOfBirth: null,
            address: null,
            dateOfIssue: null,
            dateOfExpiry: null,
            picture: "../../assets/imgs/man.png",
            phoneNumber: "0854579229",
            signature: null,
            creationDateTime: null,
            lastUpdate: null,
        },
    ]