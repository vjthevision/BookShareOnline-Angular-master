import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-loggedinview',
  templateUrl: './loggedinview.component.html',
  styleUrls: ['./loggedinview.component.scss']
})
export class LoggedinviewComponent implements OnInit {

  constructor(public service:AuthenticateService) { 
    
  }
  name=localStorage.getItem('username');
  ngOnInit(): void {
    this.name=localStorage.getItem('username');
    console.log(this.name);
  }

  onClickSignOut(){
    localStorage.setItem('token','0');
    console.log(localStorage.getItem('token'));
  }

}
