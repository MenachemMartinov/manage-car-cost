import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import reportFormComponent from './components/forms/report-form/report-form.component';
import { HomeComponent } from './pages/home/home.component';
import { IncomeComponent } from './pages/income/income.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'income', component: IncomeComponent, pathMatch: 'full' },
  { path: 'report', component: reportFormComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
