import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent} from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { from } from 'rxjs';

//配置路由
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailsComponent},
  { path: 'heroes', component: HeroesComponent}
];
//路由定义 当用户点击某个链接或者在浏览器地址栏中输入某个URL时 要显示那个视图
//path: 用于匹配浏览器地址栏中URL的字符串
//compoent: 当导航到此路由时， 路由器应该创建那个组件
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
