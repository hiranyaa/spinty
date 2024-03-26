import { Routes } from '@angular/router';
import { AddCustomersFormComponent } from 'src/app/customers/add-customers-form/add-customers-form.component';
import { CustomersComponent } from 'src/app/customers/customers.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard/dashboard.component';
import { ProjectsComponent } from 'src/app/projects/projects/projects.component';
import { ReportsComponent } from 'src/app/reports/reports/reports.component';
import { GroupsComponent } from 'src/app/settings/groups/groups.component';
import { RolesComponent } from 'src/app/settings/roles/roles.component';
import { SprintsComponent } from 'src/app/sprints/sprints/sprints.component';
import { TimeCardsComponent } from 'src/app/time-cards/time-cards/time-cards.component';
import { UsersComponent } from 'src/app/users/users/users.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'customers', component: CustomersComponent },
    { path: 'users', component: UsersComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'sprints', component: SprintsComponent },
    { path: 'time-cards', component: TimeCardsComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'settings/roles', component: RolesComponent },
    { path: 'settings/groups', component: GroupsComponent },
    { path: 'add-customer-form', component: AddCustomersFormComponent },
];
