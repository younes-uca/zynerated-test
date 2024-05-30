import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {PurchaseCriteria} from './PurchaseCriteria.model';
import {TagCriteria} from '../commun/TagCriteria.model';

export class PurchaseTagCriteria  extends BaseCriteria  {

    public id: number;
  public tag: TagCriteria ;
  public tags: Array<TagCriteria> ;

}
