import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';

const routes: Routes = [
  { path: 'new-snap', component: NewFaceSnapComponent , canActivate: [AuthGuard] },
  { path: ':id', component: SingleFaceSnapComponent  , canActivate: [AuthGuard]  },
  { path: '', component: FaceSnapListComponent  , canActivate: [AuthGuard]  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaceSnapsRoutingModule {}
