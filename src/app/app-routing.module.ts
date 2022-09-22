import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';

const routes: Routes = [

  
  {path: '',pathMatch:'full', redirectTo:'listar-empleado'},
  {path: 'agregar-empleado', component:AgregarEmpleadoComponent},
  {path: 'listar-empleado', component:ListarEmpleadoComponent},
  {path: 'editar-empleado/:id', component:EditarEmpleadoComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
