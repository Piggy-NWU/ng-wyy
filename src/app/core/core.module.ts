import { ShareModule } from '../share/share.module'; 
import { PagesModule } from '../pages/pages.module'; 
import { ServicesModule } from './../services/services.module';
import { HttpClientModule } from "@angular/common/http";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';


registerLocaleData(zh);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule
  ],
  exports:[
    ShareModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],

})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule : CoreModule){
    if(parentModule){
      throw new Error('coremodule只能被appmodule引用')
    }

  }
}
