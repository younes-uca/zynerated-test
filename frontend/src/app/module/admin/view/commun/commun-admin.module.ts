import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CardModule} from "primeng/card";

import { TagCreateAdminComponent } from './tag/create/tag-create-admin.component';
import { TagEditAdminComponent } from './tag/edit/tag-edit-admin.component';
import { TagViewAdminComponent } from './tag/view/tag-view-admin.component';
import { TagListAdminComponent } from './tag/list/tag-list-admin.component';
import { PurchaseStateCreateAdminComponent } from './purchase-state/create/purchase-state-create-admin.component';
import { PurchaseStateEditAdminComponent } from './purchase-state/edit/purchase-state-edit-admin.component';
import { PurchaseStateViewAdminComponent } from './purchase-state/view/purchase-state-view-admin.component';
import { PurchaseStateListAdminComponent } from './purchase-state/list/purchase-state-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    TagCreateAdminComponent,
    TagListAdminComponent,
    TagViewAdminComponent,
    TagEditAdminComponent,
    PurchaseStateCreateAdminComponent,
    PurchaseStateListAdminComponent,
    PurchaseStateViewAdminComponent,
    PurchaseStateEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
    FullCalendarModule,
    CardModule,

  ],
  exports: [
  TagCreateAdminComponent,
  TagListAdminComponent,
  TagViewAdminComponent,
  TagEditAdminComponent,
  PurchaseStateCreateAdminComponent,
  PurchaseStateListAdminComponent,
  PurchaseStateViewAdminComponent,
  PurchaseStateEditAdminComponent,
  ],
})
export class CommunAdminModule { }
