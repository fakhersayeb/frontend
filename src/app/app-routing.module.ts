import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AuthGuard } from './auth.guard';
import { ListeComponent } from './liste/liste.component';
import { AjoutpatientComponent } from './ajoutpatient/ajoutpatient.component';
import { AjoutportfolioComponent } from './ajoutpotfolio/ajoutpotfolio.component';
import { Modifierpatientcomponent } from './modifierpatient/modifierpatient.component';
import { ModifierportfolioComponent } from './modifierportfolio/modifierportfolio.component';
import { AjoutordonnanceComponent } from './ajoutordonnance/ajoutordonnance.component';
import { MisajourordonnanceComponent} from './misajourordonnance/misajourordonnance.component';
import { ModifierrendezvousComponent } from './modifierrendezvous/modifierrendezvous.component';
import { AjoutrendezvousComponent } from './ajoutrendezvous/ajoutrendezvous.component';
import { EnvoiemailComponent } from './envoiemail/envoiemail.component'; 
import { DiscussionComponent } from './discussion/discussion.component';

const routes: Routes = [
{path:'registration',component:InscriptionComponent},
{path:'authent',component:ConnexionComponent},
{path:'home',component:HomeComponent,canActivate:[AuthGuard]},
{path:'listes',component:ListeComponent,canActivate:[AuthGuard]},
{path:'ajout',component:AjoutpatientComponent,canActivate:[AuthGuard]},
{path:'modifier/:idp',component:Modifierpatientcomponent},
{path:'portfolio',component:AjoutportfolioComponent ,canActivate:[AuthGuard]},
{path:'misajourportfolio/:idport',component:ModifierportfolioComponent},
{path:'ordonnance',component:AjoutordonnanceComponent,canActivate:[AuthGuard]},
{path:'misajourordonnance/:idord',component:MisajourordonnanceComponent},
{path:'rendez-vous',component:AjoutrendezvousComponent,canActivate:[AuthGuard]},
{path:'misajourrendezvous/:idrend',component:ModifierrendezvousComponent},
{path:'envoiemail',component: EnvoiemailComponent,canActivate:[AuthGuard]},
{path:'discussion',component:DiscussionComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
