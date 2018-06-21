import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component'
import { CalendarComponent } from '../calendar/calendar.component'
import { RoleManagerComponent } from '../role-manager/role-manager.component'
import { EventListComponent } from '../event-list/event-list.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
      path: 'home',
      component: HomeComponent
  },
    {
      path: 'roles',
      component: RoleManagerComponent
  },
    {
        path: 'calendar',
        component: CalendarComponent,
    },
    {
        path: 'eventList',
        component: EventListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }