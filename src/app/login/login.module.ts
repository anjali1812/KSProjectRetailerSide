import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { MatInputModule,
  MatIconModule,
  MatTableModule,
 MatSelectModule,
 MatPaginatorModule,
 MatCheckboxModule,
  MatToolbarModule,
   MatButtonModule,
    MatSidenavModule,
     MatListModule,
     MatNativeDateModule,
     MatDatepickerModule} from '@angular/material';

import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
