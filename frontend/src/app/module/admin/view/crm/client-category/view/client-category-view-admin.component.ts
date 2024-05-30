import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ClientCategoryAdminService} from 'src/app/shared/service/admin/crm/ClientCategoryAdmin.service';
import {ClientCategoryDto} from 'src/app/shared/model/crm/ClientCategory.model';
import {ClientCategoryCriteria} from 'src/app/shared/criteria/crm/ClientCategoryCriteria.model';

@Component({
  selector: 'app-client-category-view-admin',
  templateUrl: './client-category-view-admin.component.html'
})
export class ClientCategoryViewAdminComponent extends AbstractViewController<ClientCategoryDto, ClientCategoryCriteria, ClientCategoryAdminService> implements OnInit {


    constructor(private clientCategoryService: ClientCategoryAdminService){
        super(clientCategoryService);
    }

    ngOnInit(): void {
    }




}
