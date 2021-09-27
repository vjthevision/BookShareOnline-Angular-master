import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './authenticate/login/login.component';
import { RegisterComponent } from './authenticate/register/register.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginviewComponent } from './authenticate/loginview/loginview.component';
import { LoggedinviewComponent } from './authenticate/loggedinview/loggedinview.component';
import { CartComponent } from './cart/cart.component';
import { AuthenticateService } from './services/authenticate.service';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AddbookComponent } from './book/addbook/addbook.component';
import { ShowbookComponent } from './book/showbook/showbook.component';

import { TokenInterceptorService } from './services/token-interceptor.service';
import { ShowIndividualBookComponent } from './book/show-individual-book/show-individual-book.component';
import { OrderComponent } from './order/order.component';
import { ShowOrderComponent } from './order/show-order/show-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginviewComponent,
    LoggedinviewComponent,
    CartComponent,
    AddbookComponent,
    ShowbookComponent,
    ShowIndividualBookComponent,
    OrderComponent,
    ShowOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatPaginatorModule,
    MatInputModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticateService, 
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
