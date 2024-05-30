import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {TagDto} from 'src/app/shared/model/commun/Tag.model';
import {TagCriteria} from 'src/app/shared/criteria/commun/TagCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';


@Injectable({
  providedIn: 'root'
})
export class TagAdminService extends AbstractService<TagDto, TagCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
    }

    public constrcutDto(): TagDto {
        return new TagDto();
    }

    public constrcutCriteria(): TagCriteria {
        return new TagCriteria();
    }

    get API() {
        return environment.apiUrlStockyservice + 'admin/tag/';
    }
}
