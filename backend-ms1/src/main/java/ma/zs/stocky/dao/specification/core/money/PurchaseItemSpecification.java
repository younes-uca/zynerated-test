package  ma.zs.stocky.dao.specification.core.money;

import ma.zs.stocky.dao.criteria.core.money.PurchaseItemCriteria;
import ma.zs.stocky.bean.core.money.PurchaseItem;
import ma.zs.stocky.zynerator.specification.AbstractSpecification;


public class PurchaseItemSpecification extends  AbstractSpecification<PurchaseItemCriteria, PurchaseItem>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicateBigDecimal("price", criteria.getPrice(), criteria.getPriceMin(), criteria.getPriceMax());
        addPredicateBigDecimal("quantity", criteria.getQuantity(), criteria.getQuantityMin(), criteria.getQuantityMax());
        addPredicateFk("product","id", criteria.getProduct()==null?null:criteria.getProduct().getId());
        addPredicateFk("product","id", criteria.getProducts());
        addPredicateFk("product","code", criteria.getProduct()==null?null:criteria.getProduct().getCode());
        addPredicateFk("purchase","id", criteria.getPurchase()==null?null:criteria.getPurchase().getId());
        addPredicateFk("purchase","id", criteria.getPurchases());
        addPredicateFk("purchase","reference", criteria.getPurchase()==null?null:criteria.getPurchase().getReference());
    }

    public PurchaseItemSpecification(PurchaseItemCriteria criteria) {
        super(criteria);
    }

    public PurchaseItemSpecification(PurchaseItemCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
