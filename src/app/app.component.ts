import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navData = [
    {parent:'home',child:['about-us','contact-us']}
    ,{parent:'electornics',child:['mobile','tv','washing-machine']}
    ];
}
