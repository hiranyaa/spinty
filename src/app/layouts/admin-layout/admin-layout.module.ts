import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from 'src/app/dashboard/dashboard/dashboard.component';
import { CustomersComponent } from 'src/app/customers/customers.component';
import { UsersComponent } from 'src/app/users/users/users.component';
import { ProjectsComponent } from 'src/app/projects/projects/projects.component';
import { SprintsComponent } from 'src/app/sprints/sprints/sprints.component';
import { TimeCardsComponent } from 'src/app/time-cards/time-cards/time-cards.component';
import { ReportsComponent } from 'src/app/reports/reports/reports.component';
import { RolesComponent } from 'src/app/settings/roles/roles.component';
import { GroupsComponent } from 'src/app/settings/groups/groups.component';
import { AddCustomersFormComponent } from 'src/app/customers/add-customers-form/add-customers-form.component';
import { AddUserFormComponent } from 'src/app/users/add-user-form/add-user-form.component';
import { AddProjectFormComponent } from 'src/app/projects/add-project-form/add-project-form.component';
import { ListOfTasksComponent } from 'src/app/tasks/list-of-tasks/list-of-tasks.component';

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    DashboardComponent,
    CustomersComponent,
    UsersComponent,
    ProjectsComponent,
    SprintsComponent,
    ListOfTasksComponent,
    TimeCardsComponent,
    ReportsComponent,
    RolesComponent,
    GroupsComponent,
    AddCustomersFormComponent,
    AddUserFormComponent,
    AddProjectFormComponent
  ]
})
export class AdminLayoutModule { }
