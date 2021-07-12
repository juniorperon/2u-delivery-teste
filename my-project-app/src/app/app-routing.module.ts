import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/template/nav/nav.component';
import { ParceirosComponent } from './views/parceiros/parceiros.component';
import { EstabelecimentoComponent } from './views/estabelecimento/estabelecimento.component';

const routes: Routes = [
  {path:'',component:NavComponent},
  {path:'home', component:HomeComponent},
  {path:'parceiro',component:ParceirosComponent},
  {path:'estabelecimento',component:EstabelecimentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
