import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import Adapter from '../../../CkeditorAdapter';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.scss']
})
export class AddnewComponent {
  public Editor = DecoupledEditor;
  selectedFile : File | undefined ;
  listselectdanhmuc: any = [];

  constructor (private http: HttpClient ,
               private api : ApiService ,
               private data : DataService ,
               private formBuilder : FormBuilder,
               private notification : NotificationService
              ) {
      this.getSelect() ;
  }

  itemForm = new FormGroup({
    name : new FormControl('' , Validators.required),
    content : new FormControl('') ,
    author : new FormControl('Barca Teams'),
    publish_date : new FormControl(''),
    category : new FormControl('') ,
    image : new FormControl('') ,
  });


  public onReady(editor: any): void {
    const element = editor.ui.getEditableElement()!;
    const parent = element.parentElement!;

    parent.insertBefore(editor.ui.view.toolbar.element!, element);

    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
      return new Adapter(loader, editor.config , this.api);
    };
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
    console.log(this.itemForm.value);
    const formData = new FormData();

    formData.append('name' , this.itemForm.value.name ?? '');
    formData.append('content' , this.itemForm.value.content ?? '');
    formData.append('author' , this.itemForm.value.author ?? '');
    formData.append('publish_date' , this.itemForm.value.publish_date ?? '');
    formData.append('category' , this.itemForm.value.category ?? '');
    formData.append('image' , this.selectedFile ?? '');

    (await this.api.post('/add_new' , formData)).subscribe((v : any) => {
        if(v.status == 200) {
          this.notification.showSuccess('Thêm thành công')
        } else {
          this.notification.showError('Lỗi rồi hãy thử lại');
        }
    })
  }
}

