import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthenticateService } from 'src/app/services/authenticate.service';

import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialogbox : MatDialogRef<AppComponent>,public service: AuthenticateService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogbox.close();
  }

  onSubmit(form: NgForm){
    this.service.getJWTToken().subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token',res.token);
        localStorage.setItem('username',res.name);
        localStorage.setItem('role',res.role);
        this._snackBar.open("Login sucessful !!!","",{
          duration:5000,
          verticalPosition:"top"
        });
      },
      err=>{
        console.log(err);
        this._snackBar.open("Login Failed !!!","",{
          duration:5000,
          verticalPosition:"top"
        });
      });
      console.log(form);
      this.onClose();
  }

}
