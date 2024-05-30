import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ClientCategoryDto} from 'src/app/shared/model/crm/ClientCategory.model';
import {ClientCategoryCriteria} from 'src/app/shared/criteria/crm/ClientCategoryCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ClientCategoryAdminService extends AbstractService<ClientCategoryDto, ClientCategoryCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ClientCategoryDto {
        return new ClientCategoryDto();
    }

    public constrcutCriteria(): ClientCategoryCriteria {
        return new ClientCategoryCriteria();
    }

    get API() {
        return environment.apiUrlCollaboratorservice + 'admin/clientCategory/';
    }
}
