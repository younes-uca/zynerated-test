import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {PurchaseStateDto} from 'src/app/shared/model/commun/PurchaseState.model';
import {PurchaseStateCriteria} from 'src/app/shared/criteria/commun/PurchaseStateCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PurchaseStateAdminService extends AbstractService<PurchaseStateDto, PurchaseStateCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): PurchaseStateDto {
        return new PurchaseStateDto();
    }

    public constrcutCriteria(): PurchaseStateCriteria {
        return new PurchaseStateCriteria();
    }

    get API() {
        return environment.apiUrlStockyservice + 'admin/purchaseState/';
    }
}
