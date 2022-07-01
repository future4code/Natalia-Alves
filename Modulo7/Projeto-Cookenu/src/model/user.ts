export type user = {
    id: string
    email: string
    password: string
    name: string
 }
 
 export interface UserInputDTO {
    name: string,
    email: string,
    password: string
 }
 
 export interface GetOwnProfileDTO {
    name: string,
    token: string
 }
 
//  export interface EditUserInput {
//     name: string,
//     id: string
//  }
 
 export interface LoginInputDTO {
    email: string,
    password: string
 }