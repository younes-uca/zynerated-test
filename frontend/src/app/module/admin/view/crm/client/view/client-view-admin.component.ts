import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ClientAdminService} from 'src/app/shared/service/admin/crm/ClientAdmin.service';
import {ClientDto} from 'src/app/shared/model/crm/Client.model';
import {ClientCriteria} from 'src/app/shared/criteria/crm/ClientCriteria.model';

import {ClientCategoryDto} from 'src/app/shared/model/crm/ClientCategory.model';
import {ClientCategoryAdminService} from 'src/app/shared/service/admin/crm/ClientCategoryAdmin.service';
@Component({
  selector: 'app-client-view-admin',
  templateUrl: './client-view-admin.component.html'
})
export class ClientViewAdminComponent extends AbstractViewController<ClientDto, ClientCriteria, ClientAdminService> implements OnInit {


    constructor(private clientService: ClientAdminService, private clientCategoryService: ClientCategoryAdminService){
        super(clientService);
    }

    ngOnInit(): void {
    }


    get clientCategory(): ClientCategoryDto {
       return this.clientCategoryService.item;
    }
    set clientCategory(value: ClientCategoryDto) {
        this.clientCategoryService.item = value;
    }
    get clientCategorys(): Array<ClientCategoryDto> {
       return this.clientCategoryService.items;
    }
    set clientCategorys(value: Array<ClientCategoryDto>) {
        this.clientCategoryService.items = value;
    }


}
