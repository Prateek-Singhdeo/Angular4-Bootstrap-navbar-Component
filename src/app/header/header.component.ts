import { Component, Input, OnInit } from '@angular/core';
import { Routes,Router, RouterModule } from '@angular/router';
@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit
{
@Input() navData;
isLoggedIn :boolean=false;
ngOnInit(){

}
login()
{
    this.isLoggedIn =true;
    this.router.navigate(['/login']);

}
logout(){
    this.isLoggedIn=false;
    this.router.navigate(['/home']);
}

constructor(private router: Router){
}

}