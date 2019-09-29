import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { from } from 'rxjs';

@Component({
  //selector 组件的选择器 组件模版文件的位置 组件私有css样式表文件的位置
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  

  constructor(private heroService: HeroService) {}

  // selectedHero: Hero;
  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  // }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
 
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }


  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
//创建完组件后很快就会调用  放置初始化逻辑的好地方
  ngOnInit() {
    this.getHeroes();
  }

}
