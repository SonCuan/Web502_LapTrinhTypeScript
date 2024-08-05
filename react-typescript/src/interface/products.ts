export interface IProducts {
   id?: number|string ;
   title : string;
   price: number;
   description : string;
   category : string;
   thumbnail : string;
   brand : string;
  
}
export interface AuthFormLogin {
   user : string;
   email : string;
   password : string;
}