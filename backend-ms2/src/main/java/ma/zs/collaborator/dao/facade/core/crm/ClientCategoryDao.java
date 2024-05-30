package ma.zs.collaborator.dao.facade.core.crm;

import org.springframework.data.jpa.repository.Query;
import ma.zs.collaborator.zynerator.repository.AbstractRepository;
import ma.zs.collaborator.bean.core.crm.ClientCategory;
import org.springframework.stereotype.Repository;
import ma.zs.collaborator.bean.core.crm.ClientCategory;
import java.util.List;


@Repository
public interface ClientCategoryDao extends AbstractRepository<ClientCategory,Long>  {
    ClientCategory findByCode(String code);
    int deleteByCode(String code);


    @Query("SELECT NEW ClientCategory(item.id,item.reference) FROM ClientCategory item")
    List<ClientCategory> findAllOptimized();

}
