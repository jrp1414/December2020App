import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Route, RouterModule, Routes } from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { ProductsComponent } from './products/products.component';
import { ProductThumbnailComponent } from './products/product-thumbnail/product-thumbnail.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { BasicHighlightDirective } from './Directives/basic-highlight.directive';
import { BetterHighlightDirective } from './Directives/better-highlight.directive';
import { UnlessDirective } from './Directives/unless.directive';
import { TempProductsComponent } from './temp-products/temp-products.component';
import { LoggerService } from './services/logger.service';
import { ProductService } from './services/product.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductGuard } from './services/product.guard';
import { PrimengModule } from './primeng/primeng.module';
import { MessageService } from 'primeng/api';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentEditComponent } from './students/student-edit/student-edit.component';
import { StudentAddComponent } from './students/student-add/student-add.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaxMinDirective } from './Directives/max-min.directive';
import { StudentEditGuard } from './students/services/student-deactivate.guard';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  // { path: "productdetails/:id/:name", component: ProductDetailsComponent },
  { path: "signup", component: SignUpComponent },
  { path: "productdetails/:id", component: ProductDetailsComponent, canActivate: [ProductGuard] },
  {
    path: "students", component: StudentsComponent, children: [
      { path: "new", component: StudentAddComponent },
      { path: ":id", component: StudentDetailsComponent },
      { path: ":id/edit", component: StudentEditComponent, canDeactivate: [StudentEditGuard] }
    ]
  },
  { path: "", component: HomeComponent }
  // { path: "**", redirectTo: "home" }
];

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    ProductsComponent,
    ProductThumbnailComponent,
    ShortenPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    TempProductsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductDetailsComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StudentEditComponent,
    StudentAddComponent,
    SignUpComponent,
    MaxMinDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  // providers:[LoggerService,ProductService],
  providers: [LoggerService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
