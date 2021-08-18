
import { Injectable } from "@angular/core";
import {  CanActivate } from "@angular/router";
import { User } from "./models/User";


@Injectable()
export class LoginRoutingGuard implements CanActivate{
    authorizeUser = false;
   
    canActivate(){
        if(!this.authorizeUser){
            alert('Login to access the quiz')
        }
        return this.authorizeUser
    }

    validateLoginCredential(user:User,uname:string,passwd:string):boolean{
        if(user != null && user.password === passwd){            
            this.authorizeUser = true;
        }else{
            this.authorizeUser = false;
        }
     return this.authorizeUser ;
    }
   
}