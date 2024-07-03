import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isHeader: boolean = false ;
  isSearch : boolean = false ;
  isChildren : boolean = false ;

  valueSearch: any = '' ;
  listitem: any = [] ;

  listchildren : any = [] ;

  constructor(private data: DataService, private api : ApiService, private router : Router) {

  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.data.isShow$.subscribe((v: boolean) => {
        this.isHeader = v ;
    })

    this.data.isSearch$.subscribe((v: boolean) => {
        this.isSearch = v ;
    })
    this.getData() ;
  }

  async getData() {
    (await this.api.get('/get_Menu')).subscribe((v) => {
        this.listitem = v ;
    })
  }

  // transform array parent to array children
  transformchildren(children: any) {
      this.isChildren =! this.isChildren ;
      this.listchildren = children ;
      console.log('boolean: ' + this.isChildren , 'list: ' + children);
  }

  closechildren() {
    this.listchildren = [] ;
    this.isChildren = false ;
  }

  isShow() {
    this.data.setNavBarBlock(!this.isHeader) ;
    this.listchildren = [] ;
    this.isChildren = false ;
  }


  chuyentrang(item : any) {
    this.router.navigate([item.link]);
    this.isShow() ;
  }

  setSearch() {
    this.data.setHeaderBlock(!this.isSearch) ;
  }

  search() {
    // trước khi gửi đi cần xử lý giá trị tìm kiếm
    this.router.navigate(['/tim-kiem/' + this.handleSearch(this.valueSearch)]);
    this.valueSearch = '' ;
    this.setSearch() ;
  }

  searchmb() {
    // trước khi gửi đi cần xử lý giá trị tìm kiếm
    this.router.navigate(['/tim-kiem/' + this.handleSearch(this.valueSearch)]);
    this.valueSearch = '' ;
    this.setSearch() ;
    this.isShow() ;
  }

  handleSearch(value : String) {
    // String to Array
    var array = value.split(' ').filter((e : any) => {
      return e != '' ;
    });
    var processed = array.join('-');
    return processed ;
  }
}
