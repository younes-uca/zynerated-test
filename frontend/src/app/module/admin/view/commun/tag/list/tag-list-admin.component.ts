import {Component, OnInit} from '@angular/core';
import {TagAdminService} from 'src/app/shared/service/admin/commun/TagAdmin.service';
import {TagDto} from 'src/app/shared/model/commun/Tag.model';
import {TagCriteria} from 'src/app/shared/criteria/commun/TagCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-tag-list-admin',
  templateUrl: './tag-list-admin.component.html'
})
export class TagListAdminComponent extends AbstractListController<TagDto, TagCriteria, TagAdminService>  implements OnInit {

    override fileName = 'Tag';




    constructor( private tagService: TagAdminService  ) {
        super(tagService);
    }

    ngOnInit(): void {
        this.activateSecurityConstraint('Tag').subscribe(() => {
            if (true || this.listActionIsValid){
                this.findPaginatedByCriteria();
                this.initExport();
                this.initCol();
            }
        });
    }


    public override  initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'reference', header: 'Reference'},
        ];
    }





   public  override prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Reference': e.reference ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
        }];
      }
}
