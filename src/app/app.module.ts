import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { SelectComponent } from './components/select/select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.reducer';
import { TabsContainerComponent } from './containers/tabs-container/tabs-container.component';
import { CheckboxContainerComponent } from './containers/checkbox-container/checkbox-container.component';
import { TextfieldContainerComponent } from './containers/textfield-container/textfield-container.component';
import { SelectContainerComponent } from './containers/select-container/select-container.component';
import { RadioContainerComponent } from './containers/radio-container/radio-container.component';
import { AppRoutingModule } from './app.routing.module';
import { DuplicateTabsComponent } from './components/duplicate-tabs/duplicate-tabs.component';
import { DuplicateRadioComponent } from './components/duplicate-radio/duplicate-radio.component';
import { DuplicateCheckboxComponent } from './components/duplicate-checkbox/duplicate-checkbox.component';
import { DuplicateSelectComponent } from './components/duplicate-select/duplicate-select.component';
import { DuplicateTextfieldComponent } from './components/duplicate-textfield/duplicate-textfield.component';

@NgModule({
    declarations: [
        AppComponent,
        TabsComponent,
        TextfieldComponent,
        SelectComponent,
        CheckboxComponent,
        RadioComponent,
        TabsContainerComponent,
        CheckboxContainerComponent,
        TextfieldContainerComponent,
        SelectContainerComponent,
        RadioContainerComponent,
        DuplicateTabsComponent,
        DuplicateRadioComponent,
        DuplicateCheckboxComponent,
        DuplicateSelectComponent,
        DuplicateTextfieldComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        // Here is configuration for set up of store module
        StoreModule.forRoot(reducers)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
