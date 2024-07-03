import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.scss']
})
export class CategoryDialogComponent {
  SelectArrayCategory : any = [] ;
  isLoading : Boolean = false ;

  @Output() categoryAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<null>,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    private apiService : ApiService,
    private notificationService : NotificationService
    ) { }

    async ngOnInit(): Promise<void> {
      this.isLoading = true;
      await this.getCategory();
      this.isLoading = false;
    }

  async getCategory() {
      (await this.apiService.get('/list_category')).subscribe((v) => {
        this.SelectArrayCategory = v ;
      })
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  async onSubmit() {
    // Xử lý dữ liệu khi form được submit
    this.dialogRef.close();
    (await this.apiService.post('/add_category' , this.data.form.value)).subscribe((v : any) => {
        console.log(v);
        if(v.status == 200) {
          this.notificationService.showSuccess('Thêm thành công');
        } else {
          this.notificationService.showError('Lỗi rồi hãy thử lại');
        }
    })
  }


}
