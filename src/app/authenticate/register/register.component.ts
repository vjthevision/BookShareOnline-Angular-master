import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppComponent } from 'src/app/app.component';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public dialogbox : MatDialogRef<AppComponent>,public service: AuthenticateService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogbox.close();
  }

  onSubmit(form: NgForm){
    this.service.register().subscribe(
      res=>{
        console.log(res);
        this._snackBar.open("Registration sucessful !!!","",{
          duration:5000,
          verticalPosition:"top"
        });
      },
      err=>{
        console.log(err);
        this._snackBar.open("Registration Failed !!!","",{
          duration:5000,
          verticalPosition:"top"
        });
      });
      console.log(form);
      this.onClose();
  }

}
