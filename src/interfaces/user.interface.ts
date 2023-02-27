export enum UserTypeEnum{
    ADMIN="ADMIN",
    REGULAR="REGULAR"
}

export type UserRole=UserTypeEnum.ADMIN|UserTypeEnum.REGULAR

export interface User{
     username:string;
     password:string;

}