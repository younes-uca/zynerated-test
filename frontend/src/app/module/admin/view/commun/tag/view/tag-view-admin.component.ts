import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TagAdminService} from 'src/app/shared/service/admin/commun/TagAdmin.service';
import {TagDto} from 'src/app/shared/model/commun/Tag.model';
import {TagCriteria} from 'src/app/shared/criteria/commun/TagCriteria.model';

@Component({
  selector: 'app-tag-view-admin',
  templateUrl: './tag-view-admin.component.html'
})
export class TagViewAdminComponent extends AbstractViewController<TagDto, TagCriteria, TagAdminService> implements OnInit {


    constructor(private tagService: TagAdminService){
        super(tagService);
    }

    ngOnInit(): void {
    }




}
