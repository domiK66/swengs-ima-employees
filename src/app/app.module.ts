import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImaEmployeesComponent } from './ima-employees/ima-employees.component';
import { HttpClientModule } from '@angular/common/http';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { ReactiveFormsModule} from "@angular/forms";
import { ImaStudentsComponent } from './ima-students/ima-students.component';

@NgModule({
  declarations: [
    AppComponent,
    ImaEmployeesComponent,
    ExponentialStrengthPipe,
    ImaStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
