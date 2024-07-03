import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import Adapter from '../../../CkeditorAdapter';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.scss']
})
export class EditmenuComponent {
  listselectmenu: any = [] ;
  listselectdanhmuc: any = [];
  myID : any ;
  constructor (
               private api : ApiService ,
               private notification : NotificationService,
               private route : ActivatedRoute
              ) {
      this.route.paramMap.subscribe(params => {
        this.myID = params.get('id');
        // Do something with this.id
        this.getDataOne(this.myID);
      });
      this.getSelect() ;
      this.getSelectMenu() ;
  }

  itemForm = new FormGroup({
    _id : new FormControl('') ,
    name : new FormControl('' , Validators.required),
    link : new FormControl('') ,
    parentId : new FormControl(null),
    categoryId : new FormControl(null),
  });


  async getDataOne(_id : any ) {
    (await this.api.get('/find_menu_id/' + _id)).subscribe((v : any ) => {
      const itemdetail = v ;
          this.itemForm.patchValue({
            _id : itemdetail._id ,
            name : itemdetail.name ,
            link : itemdetail.link ,
            parentId : itemdetail.parentId ,
            categoryId : itemdetail.categoryId
          })
    })
  }



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
    // Xử lý dữ liệu khi form được submit
    (await this.api.post('/edit_menu' , this.itemForm.value)).subscribe((v : any) => {
        if(v.status == 200) {
          this.notification.showSuccess('Thêm thành công')
        } else {
          this.notification.showError('Lỗi rồi hãy thử lại');
        }
    })
  }
}
