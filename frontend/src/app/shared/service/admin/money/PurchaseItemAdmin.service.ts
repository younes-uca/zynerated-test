import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {PurchaseItemDto} from 'src/app/shared/model/money/PurchaseItem.model';
import {PurchaseItemCriteria} from 'src/app/shared/criteria/money/PurchaseItemCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PurchaseItemAdminService extends AbstractService<PurchaseItemDto, PurchaseItemCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): PurchaseItemDto {
        return new PurchaseItemDto();
    }

    public constrcutCriteria(): PurchaseItemCriteria {
        return new PurchaseItemCriteria();
    }

    get API() {
        return environment.apiUrlStockyservice + 'admin/purchaseItem/';
    }
}
