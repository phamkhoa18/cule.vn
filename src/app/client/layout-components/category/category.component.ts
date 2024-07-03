import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  listnew: any = [];
  listloading : any = [];
  limit : number = 6 ;
  myId : any = '' ;
  item : any = '' ;
  isAds  :any = '' ;
  listdata : any = [] ;
  loading : boolean = true ;
  // object value pagination
  pagination: any = {} ;

  constructor(
    private route : ActivatedRoute,
    public api : ApiService,
    private title : Title,
    public data : DataService,
    private router :Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.subscribe(params => {
      this.myId = params.get('name');
      this.route.queryParams.subscribe(queryParams => {
        const page = queryParams['page'] || 1;
        this.getData(this.myId , this.limit , page )
      });
    });
  }

  fetchData(page: number): void {
    this.router.navigate([], {
      queryParams: { page: page },
      queryParamsHandling: 'merge'
    });
  }

  async getData(value: String, limit: any, numberpage : any ) {

    this.listnew = [] ;
    this.listloading = [] ;
    for (let i = 0; i < limit; i++) {
      this.listloading.push({});
    }
    let tempData: any;

    try {
      const response = await (await this.api.get(`/get_category_new_params/${value}/${limit}/${numberpage}`)).toPromise() ;

      // const response = await (await this.api.get('/find_category_slug/' + value + '/' + limit)).toPromise();
      tempData = response;
      this.item = tempData.title;
      this.pagination = {
          totalPage : tempData.totalPages ,
          currentPage: tempData.currentPage ,
          litmitItem : tempData.data.length
      }
      // Đảm bảo rằng listloading hiển thị ít nhất trong 3 giây
      setTimeout(() => {
        this.listnew = tempData.data;
        this.listloading = [];
        this.title.setTitle(this.item.name + ' - Official FC Barcelona Website Cule.vn');
      }, 1000);
    } catch (error) {
      console.error(error);
      this.listloading = [];
    }
  }


}
