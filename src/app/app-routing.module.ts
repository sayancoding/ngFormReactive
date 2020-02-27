import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormInputComponent } from './form-input/form-input.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/welcome" },
  { path: "welcome", pathMatch: "full", component: WelcomeComponent },
  { path: "registration", component: FormInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
