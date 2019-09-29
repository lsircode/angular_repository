/*核心模块 */
import { NgModule }       from '@angular/core';
/*浏览器解析模块  */
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';
/*根组件*/
import { AppComponent }         from './app.component';
/*其他组件*/
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailsComponent }  from './hero-details/hero-details.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { from } from 'rxjs';

/*装饰器， 接受一个元数据对象，告诉angular如何编译和启动应用*/
@NgModule({
  imports: [ /*配置当前模块运行依赖的其他模块*/
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [/* 配置当前项目运行的组件*/
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent,
    HeroSearchComponent
  ],
  providers: [], /*配置项目所需要的服务*/
  bootstrap: [ AppComponent ]/*指定应用的主视图（根组件）通过引导根AppModule来启动应用，这里一般写的是根组件*/
})
//根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
