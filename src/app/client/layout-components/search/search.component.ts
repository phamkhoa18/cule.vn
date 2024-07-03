import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() id!: string;
  listloading : any = [] ;
  onedetail : any = '';
  page: any = 1 ;
  isLoading: boolean = false ;

  constructor(public api : ApiService , private route: ActivatedRoute,
    private viewportScroller : ViewportScroller , private titleService : Title , public data : DataService,
    private router : Router,
    private title :Title
  ) {
    this.isShowSubscription = this.data.isShow$.subscribe(isShow => {
      this.isShow = isShow;
      console.log(this.isShow);
    });
  }

  myName : any ;
  listnew :any = [] ;
  isShow: boolean = false;
  private isShowSubscription!: Subscription;

  ngOnDestroy() {
    this.isShowSubscription.unsubscribe();
  }

  async ngOnInit(): Promise<any>  {
    this.viewportScroller.scrollToPosition([0, 0]);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    await this.queryparams();
  }

  queryparams() {
    this.route.paramMap.subscribe((params: Params) => {
      var myId = params['get']('name');
      // xử lý giá trị trước khi trả dữ liệu về
      this.myName = myId.split('-').join(' ') ;
      // set giá trị tìm kiếm trong background
      this.getData(6,this.page, false);
    });
  }

  handleSearch(value : String) {
    // String to Array
    var array = value.split(' ').filter((e : any) => {
      return e != '' ;
    });
    var processed = array.join('-');
    return processed ;
  }

  async getData(limit : any , page: any , pushitem :boolean ) {
    (await this.api.get('/search/' + limit + '/' + page + '/' + this.myName)).subscribe((v : any) => {
        this.title.setTitle( "Tìm kiếm: " + this.myName + ' - Official FC Barcelona Website Cule.vn');
        if(pushitem) {
            this.listnew.push(...v.data);
        } else {
          this.listnew = v.data ;
        }
    })
  }
}
