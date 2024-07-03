import { Component, Input, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { toZonedTime, toDate, format, formatInTimeZone } from 'date-fns-tz';
@Component({
  selector: 'app-adsnews',
  templateUrl: './adsnews.component.html',
  styleUrls: ['./adsnews.component.scss']
})
export class AdsnewsComponent {

  @Input() categoryId: string | null = null;
  @Input() title: string | null = null;
  @Input() layout: string | null = null;

  listnew: any = [];
  item: any ;
  pagination: any;
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
    if (this.categoryId) {
        this.getData(this.categoryId , 8 , 1) ;
    } else {
      new Error('Lỗi')
    }
  }

  getDatePublicPost(publish_date: any ) {
    const timeZone = 'Asia/Ho_Chi_Minh';
    return  formatInTimeZone(publish_date, timeZone, 'dd/MM/yyyy HH:mm');
  }


  async getData(value: String, limit: any, numberpage : any ) {
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
        this.listnew = tempData.data;
    } catch (error) {
      console.error(error);
    }
  }
}



