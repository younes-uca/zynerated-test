package ma.zs.collaborator.dao.facade.core.crm;

import org.springframework.data.jpa.repository.Query;
import ma.zs.collaborator.zynerator.repository.AbstractRepository;
import ma.zs.collaborator.bean.core.crm.Client;
import org.springframework.stereotype.Repository;
import ma.zs.collaborator.bean.core.crm.Client;
import java.util.List;


@Repository
public interface ClientDao extends AbstractRepository<Client,Long>  {
    Client findByEmail(String email);
    int deleteByEmail(String email);

    List<Client> findByClientCategoryId(Long id);
    int deleteByClientCategoryId(Long id);
    long countByClientCategoryCode(String code);

    @Query("SELECT NEW Client(item.id,item.fullName) FROM Client item")
    List<Client> findAllOptimized();

}
