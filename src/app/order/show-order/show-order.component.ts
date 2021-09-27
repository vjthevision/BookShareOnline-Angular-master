import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from 'src/app/services/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.scss']
})
export class ShowOrderComponent implements OnInit {

  constructor(private service: OrderService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar) {
    // this.service.listen().subscribe((m: any) => {
    //   console.log(m);
    //   this.refreshCartList();
    // })
    this.refreshOrderList();
  }
  ngOnInit(): void {
    this.refreshOrderList()
  }

  listData = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'BookName', 'Quantity', 'Price', 'SumTotal','Status','Options'];
  @ViewChild(MatSort) sort: MatSort = new MatSort();

  refreshOrderList() {
    this.service.getOrderList().subscribe(data => {
      this.listData = new MatTableDataSource(data);
      this.listData.sort = this.sort;
      console.log(this.listData);
    });
    console.log(this.listData);
  }
 
  applyFilter(event: Event) {
    this.listData.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
  }

  cancelOrder(orderid: number){
    this.service.cancelOrder(orderid).subscribe(
      (res) => {
        console.log(res);
        this.refreshOrderList();
        this._snackBar.open('Cancelled Sucessfully !!!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      },
      (err) => {
        console.log(err);
        this.refreshOrderList();
        this._snackBar.open('Cancel Failed !!!', '', {
          duration: 5000,
          verticalPosition: 'top',
        });
      }
    );
     
  }

}
