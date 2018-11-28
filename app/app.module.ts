import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatRadioModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatSelect, MatSelectModule, MatSliderModule, MatMenuTrigger, MatMenuModule, MatDrawerContainer, MatDrawerContent, MatSidenavModule, MatToolbarModule, MatListModule, MatDividerModule, MatAccordion, MatExpansionModule, MatGridListModule} from '@angular/material';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { ErrormessageComponent } from './errormessage/errormessage.component';
import { InputComponent } from './input/input.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { Select1Component } from './select1/select1.component';
import { Select2Component } from './select2/select2.component';
import { MandatoryfieldComponent } from './mandatoryfield/mandatoryfield.component';
import { SliderComponent } from './slider/slider.component';
import { MenuComponent } from './menu/menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DividerComponent } from './divider/divider.component';
import { DividerverticalComponent } from './dividervertical/dividervertical.component';
import { ExpansionpanelComponent } from './expansionpanel/expansionpanel.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatepickerComponent,
    FormFieldComponent,
    ErrormessageComponent,
    InputComponent,
    RadiobuttonComponent,
    Select1Component,
    Select2Component,
    MandatoryfieldComponent,
    SliderComponent,
    MenuComponent,
    SidenavComponent,
    ToolbarComponent,
    DividerComponent,
    DividerverticalComponent,
    ExpansionpanelComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,MatFormFieldModule,
    ReactiveFormsModule, MatAutocompleteModule, MatInputModule,
    MatCheckboxModule,MatRadioModule,MatCardModule,MatDatepickerModule, MatNativeDateModule,
    MatRadioModule,MatSelectModule,MatSliderModule,MatMenuModule,MatSidenavModule,MatToolbarModule,
    MatListModule,MatDividerModule,MatExpansionModule,MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
