import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import {
  NbActionsModule,
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NbProgressBarModule,
  NbWindowModule,
  NbInputModule,
  NbSelectModule,
  NbDatepickerModule,
  NbDialogModule,
} from '@nebular/theme';

import { NbSecurityModule } from '@nebular/security';

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
  ThemeSwitcherComponent,
  TinyMCEComponent,
  ThemeSwitcherListComponent,
  HeaderOgcComponent,
  CreateProjectComponent,
  CreateClientComponent,
  CreateLineItemComponent,
  CreateSubDivisionComponent,
  CreateDivisionComponent,
  CreateProjectTemplateComponent,
} from './components';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes';
import {
  OneColumnLayoutComponent,
  SampleLayoutComponent,
  OgcLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';

import { HeaderProjectsComponent } from './components/header-projects/header.component';
import { HeaderProjectComponent } from './components/header-project/header-project.component';
import { HeaderClientComponent } from './components/header-clients/header.component';
import { HeaderPriceBookComponent } from './components/header-pricebook/header.component';
import { RouterModule } from '@angular/router';

const BASE_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  Ng2SmartTableModule,
];

const NB_MODULES = [
  NbCardModule,
  NbInputModule,
  NbLayoutModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbMenuModule,
  NbSelectModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbWindowModule,
  NbDatepickerModule,
  NbDialogModule,
  NbCheckboxModule,
  NbPopoverModule,
  NbContextMenuModule,
  NgbModule,
  NbSecurityModule, // *nbIsGranted directive,
  NbProgressBarModule,
];

const COMPONENTS = [
  CreateProjectComponent,
  CreateClientComponent,
  SwitcherComponent,
  LayoutDirectionSwitcherComponent,
  ThemeSwitcherComponent,
  ThemeSwitcherListComponent,
  HeaderComponent,
  HeaderOgcComponent,
  HeaderProjectsComponent,
  HeaderProjectComponent,
  HeaderClientComponent,
  HeaderPriceBookComponent,
  FooterComponent,
  SearchInputComponent,
  ThemeSettingsComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  OgcLayoutComponent,
  SampleLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
  CreateLineItemComponent,
  CreateSubDivisionComponent,
  CreateDivisionComponent,
  CreateProjectTemplateComponent,
];

const ENTRY_COMPONENTS = [
  ThemeSwitcherListComponent,
  CreateProjectComponent,
  CreateClientComponent,
  CreateLineItemComponent,
  CreateSubDivisionComponent,
  CreateDivisionComponent,
  CreateProjectTemplateComponent,
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default',
    },
    [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME ],
  ).providers,
  ...NbWindowModule.forRoot().providers,
  ...NbDatepickerModule.forRoot().providers,
  ...NbDialogModule.forRoot().providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
  NgbActiveModal,
];

@NgModule({
  imports: [...BASE_MODULES, ...NB_MODULES, RouterModule],
  exports: [...BASE_MODULES, ...NB_MODULES, ...COMPONENTS, ...PIPES],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [...NB_THEME_PROVIDERS],
    };
  }
}
