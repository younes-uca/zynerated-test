package  ma.zs.collaborator.dao.specification.core.crm;

import ma.zs.collaborator.dao.criteria.core.crm.ClientCategoryCriteria;
import ma.zs.collaborator.bean.core.crm.ClientCategory;
import ma.zs.collaborator.zynerator.specification.AbstractSpecification;


public class ClientCategorySpecification extends  AbstractSpecification<ClientCategoryCriteria, ClientCategory>  {

    @Override
    public void constructPredicates() {
        addPredicateId("id", criteria);
        addPredicate("reference", criteria.getReference(),criteria.getReferenceLike());
        addPredicate("code", criteria.getCode(),criteria.getCodeLike());
    }

    public ClientCategorySpecification(ClientCategoryCriteria criteria) {
        super(criteria);
    }

    public ClientCategorySpecification(ClientCategoryCriteria criteria, boolean distinct) {
        super(criteria, distinct);
    }

}
