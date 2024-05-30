import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {PurchaseTagDto} from 'src/app/shared/model/money/PurchaseTag.model';
import {PurchaseTagCriteria} from 'src/app/shared/criteria/money/PurchaseTagCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class PurchaseTagAdminService extends AbstractService<PurchaseTagDto, PurchaseTagCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): PurchaseTagDto {
        return new PurchaseTagDto();
    }

    public constrcutCriteria(): PurchaseTagCriteria {
        return new PurchaseTagCriteria();
    }

    get API() {
        return environment.apiUrlStockyservice + 'admin/purchaseTag/';
    }
}
