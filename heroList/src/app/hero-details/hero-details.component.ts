import { Component, OnInit, Input } from '@angular/core';
/*inpur 输入属性是用来接收外部传入的数据*/
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



import { Hero } from '../hero';
import { HeroService} from '../hero.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  public peopleInfo:any = {
    username: '',
    sex: '2',
    cityList: ['北京', '上海', '深圳'],
    city: '上海',

    hobby:[{
          title: '吃饭',
          checked:false
      },{
            title:'睡觉',
            checked:false
        },{

          title:'敲代码',
          checked:true
      }],

      mark:''
  }

  doSubmit(){
    console.log(this.peopleInfo);
  }


  @Input() hero: Hero;


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
  
  save(): void {
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }
}
