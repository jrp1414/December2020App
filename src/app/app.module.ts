import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Route, RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StudentsResolver } from './students/services/students.resolver';
import { StudentDetailsResolver } from './students/services/studentdetails.resolver';
import { DecemeberBatchInterceptor } from './students/services/http.interceptor';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './strore/auth.reducer';
import { MatTableSampleComponent } from './students/mat-table-sample/mat-table-sample.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DashboardComponent } from './students/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';


const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "products", component: ProductsComponent },
  // { path: "productdetails/:id/:name", component: ProductDetailsComponent },
  { path: "signup", component: SignUpComponent },
  { path: "productdetails/:id", component: ProductDetailsComponent, canActivate: [ProductGuard] },
  {
    path: "students", component: StudentsComponent, resolve: { students: StudentsResolver }, children: [
      { path: "new", component: StudentAddComponent },
      { path: ":id", component: StudentDetailsComponent, resolve: { student: StudentDetailsResolver } },
      { path: ":id/edit", component: StudentEditComponent, canDeactivate: [StudentEditGuard] }
    ]
  },
  { path: "", component: DashboardComponent }
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
    MaxMinDirective,
    MatTableSampleComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({authReducer:authReducer})    
  ],
  // providers:[LoggerService,ProductService],
  providers: [
    LoggerService,
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: DecemeberBatchInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
