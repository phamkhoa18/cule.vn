import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit, OnChanges{


  @Input() categoryId: string | null = null;
  @Input() title: string | null = null;
  @Input() layout: string | null = null;

  listnew: any = [];
  item: any ;
  pagination: any;
  listloading : any = [1,2,3,4,5,6];
  numberpage : any = 1 ;
  limit : any = 6;

  constructor(public api : ApiService,private settitle : Title, public data : DataService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  // CONFIG LAYOUT COMPONENT CATEGORY
    // ' layout3c ' : ' 3col '
    // ' layout4c ' : ' 4col '
    // ' layout1b2c ' : ' 1box 2col '
    // ' layout1b4c ' : ' 1box 4col '

  ngOnChanges(changes: SimpleChanges): void {
    // Gọi API nếu các giá trị cần thiết đã có
    if (this.categoryId && this.layout) {

      if(this.layout == 'layout3c') {
          this.limit = 6
      } else if (this.layout == 'layout1b2c') {
          this.limit = 3 ;
      }
      else if (this.layout == 'layout4c') {
        this.limit = 8 ;
      }
       else {
        this.limit = 5 ;
      }
          this.getData(this.categoryId, this.limit, this.numberpage) ;
    } else {
      new Error('Lỗi')
    }
  }

  async getData(value: String, limit: any, numberpage : any ) {

    this.listnew = [] ;
    this.listloading = [] ;
    for (let i = 0; i < limit; i++) {
      this.listloading.push({});
    }
    let tempData: any;

    try {
      const response = await (await this.api.get(`/get_category_new/${value}/${limit}/${numberpage}`)).toPromise() ;

      // const response = await (await this.api.get('/find_category_slug/' + value + '/' + limit)).toPromise();
      tempData = response;
      this.item = tempData.title;
      this.pagination = {
          totalPage : tempData.totalPages ,
          currentPage: tempData.currentPage ,
          litmitItem : tempData.data.length
      }
      if(this.title == '' ) {
          this.title = this.item.name ;
      }
      // Đảm bảo rằng listloading hiển thị ít nhất trong 3 giây
      setTimeout(() => {
        this.listnew = tempData.data;
        this.listloading = [];
      }, 1000);
    } catch (error) {
      console.error(error);
      this.listloading = [];
    }
  }


  nextpage() {
    this.numberpage = this.numberpage + 1 ;
    this.getData(this.categoryId || '', this.limit , this.numberpage);
  }

  prevpage() {
    this.numberpage = this.numberpage - 1 ;
    this.getData(this.categoryId || '', this.limit , this.numberpage);
  }

}
