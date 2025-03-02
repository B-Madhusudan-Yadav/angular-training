import { Routes } from '@angular/router';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
    {path: '', component: HelloComponentComponent },
    {path: 'userlist', component: UserListComponent }
];
