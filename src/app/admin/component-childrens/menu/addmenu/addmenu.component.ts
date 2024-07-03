import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import Adapter from '../../../CkeditorAdapter';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddmenuComponent {
  listselectmenu: any = [] ;
  listselectdanhmuc: any = [];

  constructor (
               private api : ApiService ,
               private notification : NotificationService
              ) {
      this.getSelect() ;
      this.getSelectMenu() ;
  }

  itemForm = new FormGroup({
    name : new FormControl('' , Validators.required),
    link : new FormControl('') ,
    parentId : new FormControl(null),
    categoryId : new FormControl(null),
  });



  async getSelectMenu(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      (await this.api.get('/list_menu')).subscribe(
        (v: any) => {
          this.listselectmenu = v;
          resolve();
        },
        (error: any) => {
          console.error(error);
          reject();
        }
      );
    });
  }

  async getSelect(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      (await this.api.get('/list_category')).subscribe(
        (v: any) => {
          this.listselectdanhmuc = v;
          resolve();
        },
        (error: any) => {
          console.error(error);
          reject();
        }
      );
    });
  };


  async onSubmit() {
    (await this.api.post('/add_menu' , this.itemForm.value)).subscribe((v : any) => {
        if(v.status == 200) {
          this.notification.showSuccess('Thêm thành công')
        } else {
          this.notification.showError('Lỗi rồi hãy thử lại');
        }
    })
  }
}
