import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  displayedColumns = ['number','name' , 'slug', 'link', 'categoryId' , 'actions'];
  dataSource = [];

  items : any = [] ;
  isValid: Boolean = false;
  listdanhmuc: any  = [];
  isLoading : Boolean = true ;
  // dòng chảy
  private _listdanhmucSuject : BehaviorSubject<[]> = new BehaviorSubject([]);
  private _itemsSuject : BehaviorSubject<[]> = new BehaviorSubject([]);
  // nơi phân phát
  listdanhmuc$ : Observable<[]> = this._listdanhmucSuject.asObservable() ;
  items$ : Observable<[]> = this._itemsSuject.asObservable() ;

  constructor (public api : ApiService , private data : DataService , private router : Router) {}


  async ngOnInit(): Promise<void> {
    await this.getData();
  }

  setlistdanhmuc(data : any) {
    this._listdanhmucSuject.next(data);
  }

  setlistitems(data : any ) {
    this._itemsSuject.next(data);
  }

  async getData(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      (await this.api.get('/get_Menu')).subscribe(
        (v: any) => {
          this.isLoading = false;
          this.listdanhmuc = v ;
          this.setlistdanhmuc(this.listdanhmuc);
          this.listdanhmuc$.subscribe(v => this.listdanhmuc = v );
          this.items = this.setgetItems(this.listdanhmuc, null, 0);
          resolve();
        },
        (error: any) => {
          console.error(error);
          reject();
        }
      );
    });
  }


  expanded(item: any) {
    item.expanded = !item.expanded;
    this.items = this.setgetItems(this.listdanhmuc, null, 0);
  }

  setgetItems(data: any, items: any, index: any) {
    data.forEach((x: any) => {
      if (!items) items = [];
      items.push(x);
      items[items.length - 1].index = index;
      if (x.children && x.expanded)
        this.setgetItems(x.children, items, index + 1);
    });
    return items;
  }


  removeItem(item: any ) {
    Swal.fire({
      title: 'Bạn có muốn xóa danh mục này không ?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then( async (result) => {

      if (result.isConfirmed) {
        (await this.api.get('/del_menu/' + item._id)).subscribe((v : any ) => {
            if(v.status == 200) {
              this.data.notification('Xóa menu thành công ' , 'Xóa menu thành công' , 'success')
              this.getData();
            } else {
              this.data.notification('Xóa menu không thành công' , 'Xóa menu không thành công' , 'error')
              this.getData();
            }
        });
      }

    })
  }


}



