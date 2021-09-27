import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from './authenticate/login/login.component';
import { ShowbookComponent } from './book/showbook/showbook.component';
import { AuthenticateService } from './services/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'BookShareOnline-Angular';

  constructor(private dialog: MatDialog, public service: AuthenticateService)
  {
    localStorage.setItem('token','0');
    localStorage.setItem('username','user');
    localStorage.setItem('role','role');
  }
  onAddbook() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(ShowbookComponent, dialogConfig);
  }
}
