import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(
    private service: CartService,
    private orderService: OrderService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    // this.service.listen().subscribe((m: any) => {
    //   console.log(m);
    //   this.refreshCartList();
    // })
    this.refreshCartList();
  }
  ngOnInit(): void {
    this.refreshCartList();
  }

  listData = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'id',
    'BookName',
    'Quantity',
    'Price',
    'SumTotal',
    'Options',
  ];
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  refreshCartList() {
    this.service.getCartList().subscribe((data) => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      console.log(this.listData);
    });
    console.log(this.listData);
  }
  Order(bookid :any, quantity:number, cartid:number) {
    this.orderService.Order(bookid, quantity).subscribe(
      (res) => {
        console.log(res);
        this.service.deleteCartEntry(cartid).subscribe(res=>{
          console.log(res);
          this.refreshCartList();
        },
        err=>{
          console.log(err);
        });
        this._snackBar.open('Order Sucessfully !!!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      },
      (err) => {
        console.log(err);
        this._snackBar.open('Order Failed !!!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      }
    );
  }
  deleteCartEntry(cartid :number){
    this.service.deleteCartEntry(cartid).subscribe(
      (res) => {
        console.log(res);
        this.refreshCartList();
        this._snackBar.open('Deleted Sucessfully !!!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      },
      (err) => {
        console.log(err);
        this._snackBar.open('Delete Failed !!!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      }
    );
  }
  applyFilter(event: Event) {
    this.listData.filter = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
  }
}
