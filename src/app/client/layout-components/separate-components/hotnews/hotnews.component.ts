import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hotnews',
  templateUrl: './hotnews.component.html',
  styleUrls: ['./hotnews.component.scss']
})
export class HotnewsComponent {


  listnew : any = [] ;

  constructor(private api : ApiService) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getData() ;
  }


  async getData() {
    (await this.api.get('/list_new_hot')).subscribe((v: any) => {
        this.listnew = v ;
    })
  }




}
