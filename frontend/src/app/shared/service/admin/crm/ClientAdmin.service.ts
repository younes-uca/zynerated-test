import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {ClientDto} from 'src/app/shared/model/crm/Client.model';
import {ClientCriteria} from 'src/app/shared/criteria/crm/ClientCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class ClientAdminService extends AbstractService<ClientDto, ClientCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): ClientDto {
        return new ClientDto();
    }

    public constrcutCriteria(): ClientCriteria {
        return new ClientCriteria();
    }

    get API() {
        return environment.apiUrlCollaboratorservice + 'admin/client/';
    }
}
