import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ShowIndividualBookComponent } from '../show-individual-book/show-individual-book.component';

@Component({
  selector: 'app-showbook',
  templateUrl: './showbook.component.html',
  styleUrls: ['./showbook.component.scss'],
})
export class ShowbookComponent implements OnInit {
  constructor(
    private service: BookService,
    private cartService: CartService,
    private orderService: OrderService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    // this.service.listen().subscribe((m: any) => {
    //   console.log(m);
    //   this.refreshBookList();
    // })
    this.refreshBookList();
  }

  ngOnInit(): void {}

  listData = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'category',
    'author',
    'Options',
  ];
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  refreshBookList() {
    this.service.getBooks().subscribe((data) => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      console.log(this.listData);
    });
    console.log(this.listData);
  }
  showIndividualBook(book: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    this.dialog.open(ShowIndividualBookComponent, dialogConfig);
    this.service.bookid = book.id;
    this.service.formData = book;
  }
  applyFilter(event: Event) {
    this.listData.filter = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
  }
  addToCart(bookid: number) {
    this.cartService.addToCart(bookid, 1).subscribe(
      (res) => {
        console.log(res);
        this._snackBar.open('Added to Cart Sucessfully !!!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      },
      (err) => {
        console.log(err);
        this._snackBar.open('Failed to add to cart !!!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      }
    );
  }

  addToOrder(bookid: number) {
    this.orderService.Order(bookid, 1).subscribe(
      (res) => {
        console.log(res);
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
}
