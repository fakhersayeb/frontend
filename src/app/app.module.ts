import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';
import {RouterModule} from '@angular/router';
import {AuthService} from './auth.service';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import {AuthGuard} from './auth.guard';
import { AjoutpatientComponent } from './ajoutpatient/ajoutpatient.component';
import { ListeComponent } from './liste/liste.component';
import { MatIconModule } from '@angular/material/icon';
import { AjoutportfolioComponent } from './ajoutpotfolio/ajoutpotfolio.component';
import { AjoutrendezvousComponent } from './ajoutrendezvous/ajoutrendezvous.component';
import { AjoutordonnanceComponent } from './ajoutordonnance/ajoutordonnance.component';
import { Modifierpatientcomponent } from './modifierpatient/modifierpatient.component';
import { ModifierportfolioComponent } from './modifierportfolio/modifierportfolio.component';
import { MisajourordonnanceComponent } from './misajourordonnance/misajourordonnance.component';
import { ModifierrendezvousComponent } from './modifierrendezvous/modifierrendezvous.component';
import { EnvoiemailComponent } from './envoiemail/envoiemail.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { FooterComponent } from './footer/footer.component';
import { PageComponent } from './page/page.component';
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    InscriptionComponent,
    TestComponent,
    HomeComponent,
    AjoutpatientComponent,
    ListeComponent,
    AjoutportfolioComponent,
    AjoutrendezvousComponent,
    AjoutordonnanceComponent,
    Modifierpatientcomponent,
    ModifierportfolioComponent,
    MisajourordonnanceComponent,
    ModifierrendezvousComponent,
    EnvoiemailComponent,
    DiscussionComponent,
    FooterComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      
    ]),
    MatIconModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
