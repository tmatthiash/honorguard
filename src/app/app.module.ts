import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import {ScheduleModule} from 'primeng/schedule';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import { AssignComponent } from './assign/assign.component';
import { RoleManagerComponent } from './role-manager/role-manager.component';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CalendarComponent,
    AssignComponent,
    RoleManagerComponent,
    EventListComponent
  ],
  imports: [
    AppRoutingModule,
    ScheduleModule,
    MatSelectModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    DropdownModule,
    NgbModule.forRoot(),
    TabViewModule,
    BrowserModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
