import {BaseCriteria} from 'src/app/zynerator/criteria/BaseCriteria.model';
import {PurchaseTagCriteria} from './PurchaseTagCriteria.model';
import {PurchaseStateCriteria} from '../commun/PurchaseStateCriteria.model';
import {PurchaseCriteria} from './PurchaseCriteria.model';
import {TagCriteria} from '../commun/TagCriteria.model';
import {PurchaseItemCriteria} from './PurchaseItemCriteria.model';
import {ClientCriteria} from '../crm/ClientCriteria.model';

export class PurchaseCriteria  extends BaseCriteria  {

    public id: number;
    public reference: string;
    public referenceLike: string;
    public purchaseDate: Date;
    public purchaseDateFrom: Date;
    public purchaseDateTo: Date;
    public image: string;
    public imageLike: string;
     public total: number;
     public totalMin: number;
     public totalMax: number;
    public description: string;
    public descriptionLike: string;
  public client: ClientCriteria ;
  public clients: Array<ClientCriteria> ;
  public purchaseState: PurchaseStateCriteria ;
  public purchaseStates: Array<PurchaseStateCriteria> ;
      public purchaseItems: Array<PurchaseItemCriteria>;
      public purchaseTags: Array<PurchaseTagCriteria>;

}
