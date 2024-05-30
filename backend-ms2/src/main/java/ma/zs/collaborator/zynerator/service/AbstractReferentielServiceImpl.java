package ma.zs.collaborator.zynerator.service;

import ma.zs.collaborator.zynerator.audit.AuditBusinessObjectEnhanced;
import ma.zs.collaborator.zynerator.criteria.BaseCriteria;
import ma.zs.collaborator.zynerator.repository.AbstractRepository;

public abstract class AbstractReferentielServiceImpl<T extends AuditBusinessObjectEnhanced, CRITERIA extends BaseCriteria, REPO extends AbstractRepository<T, Long>> extends AbstractServiceImpl<T, CRITERIA, REPO> {

    public AbstractReferentielServiceImpl(REPO dao) {
        super(dao);
    }

}
