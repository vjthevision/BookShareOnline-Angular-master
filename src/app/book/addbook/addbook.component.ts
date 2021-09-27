import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookModel } from 'src/app/models/BookModel';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {

  constructor(public service: BookService, private _snackBar: MatSnackBar) { 
    
  }
  
  formData = new BookModel();
  PhotoFileName ="";
  PhotoFilePath="";
  ngOnInit(): void {
    this.resetForm();
    
    
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.formData = {
      name: "",
      price: 0
    }
  }

  onSubmit(form: NgForm) {
    this.service.formData.photoFileName = this.PhotoFileName;
    this.service.addBook().subscribe(
      res => {
        console.log(res);
        this.resetForm();
        this._snackBar.open("Upload Successful !!!", "", {
          duration: 5000,
          verticalPosition: "top"
        });
        
      },
      err => {
        console.log(err);
        this._snackBar.open("Upload failed !!!", "", {
          duration: 5000,
          verticalPosition: "top"
        });
      }
    );
  }

  uploadPhoto(event: any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }
  applyFilter(event: Event) {

  }
}
