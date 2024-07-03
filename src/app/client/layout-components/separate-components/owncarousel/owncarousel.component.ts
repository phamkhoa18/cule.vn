import { Component } from '@angular/core';
import 'owl.carousel';

@Component({
  selector: 'app-owncarousel',
  templateUrl: './owncarousel.component.html',
  styleUrls: ['./owncarousel.component.scss']
})
export class OwncarouselComponent {

  listdata: any = [
      {title : 'Robert Lewandowski' , number : 9 , image : 'lewan.webp'},
      {title : 'Raphinha' , number : 1 , image : 'raphinha.webp'},
      {title : 'Ferran Torres' , number : 7 , image : 'tores.webp'},
      {title : 'Ilkay Gündogan' , number : 22 , image : 'gundogan.webp'},
      {title : 'Frenkie de Jong' , number : 21 , image : 'dejong.webp'},
      {title : 'Pedri' , number : 8 , image : 'pedri.webp'},
      {title : 'Gavi' , number : 6 , image : 'gavi.webp'},
      {title : 'João Cancelo' , number : 2 , image : 'cancelo.webp'},
      {title : 'Marc-André ter Stegen' , number : 1, image : 'stegen.webp'},
  ] ;


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    $('.owl-carousel').owlCarousel({
      center: true,
      loop: true,
      margin: 30,
      autoplay: true,
      responsiveClass: true,
      responsive:{
          0:{
              items: 2,
          },
          767:{
              items: 3,
          },
          1200:{
              items: 4,
          }
      }
  });
  }


}
