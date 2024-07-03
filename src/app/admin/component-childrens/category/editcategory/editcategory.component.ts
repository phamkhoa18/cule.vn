import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import Adapter from '../../../CkeditorAdapter';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.scss']
})
export class EditcategoryComponent {
  public Editor = DecoupledEditor;
  selectedFile : File | undefined ;
  listselectdanhmuc: any = [];
  myID : any ;
  constructor (private http: HttpClient ,
               public api : ApiService ,
               private data : DataService ,
               private formBuilder : FormBuilder,
               private notification : NotificationService,
               private route : ActivatedRoute
              ) {

      this.route.paramMap.subscribe(params => {
        this.myID = params.get('id');
        // Do something with this.id
        this.getDataOne(this.myID);
      });

      this.getSelect() ;
  }

  itemForm = new FormGroup({
    _id : new FormControl('') ,
    name : new FormControl('' , Validators.required),
    parent_id : new FormControl('') ,
    link : new FormControl(''),
  });


  public onReady(editor: any): void {
    const element = editor.ui.getEditableElement()!;
    const parent = element.parentElement!;

    parent.insertBefore(editor.ui.view.toolbar.element!, element);

    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
      return new Adapter(loader, editor.config , this.api);
    };
  }


  async getDataOne(_id : any ) {
    (await this.api.get('/find_category_id/' + _id)).subscribe((v : any ) => {
      const itemdetail = v ;
          this.itemForm.patchValue({
            _id : itemdetail._id ,
            name : itemdetail.name ,
            parent_id : itemdetail.parent_id ,
            link : itemdetail.link
          })
    })
  }

  async getSelect(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      (await this.api.get('/list_category')).subscribe(
        (v: any) => {
          this.listselectdanhmuc = v;
          console.log(this.listselectdanhmuc);
          resolve();
        },
        (error: any) => {
          console.error(error);
          reject();
        }
      );
    });
  };


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async onSubmit() {
    // Xử lý dữ liệu khi form được submit
    (await this.api.post('/edit_category' , this.itemForm.value)).subscribe((v : any) => {
        console.log(v);
        if(v.status == 200) {
          this.notification.showSuccess('Thêm thành công')
        } else {
          this.notification.showError('Lỗi rồi hãy thử lại');
        }
    })
  }
}
