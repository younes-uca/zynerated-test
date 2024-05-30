package ma.zs.stocky.dao.facade.core.money;

import org.springframework.data.jpa.repository.Query;
import ma.zs.stocky.zynerator.repository.AbstractRepository;
import ma.zs.stocky.bean.core.money.Purchase;
import org.springframework.stereotype.Repository;
import ma.zs.stocky.bean.core.money.Purchase;
import java.util.List;


@Repository
public interface PurchaseDao extends AbstractRepository<Purchase,Long>  {
    Purchase findByReference(String reference);
    int deleteByReference(String reference);

    List<Purchase> findByClientId(Long id);
    int deleteByClientId(Long id);
    long countByClientEmail(String email);
    List<Purchase> findByPurchaseStateId(Long id);
    int deleteByPurchaseStateId(Long id);
    long countByPurchaseStateCode(String code);

    @Query("SELECT NEW Purchase(item.id,item.reference) FROM Purchase item")
    List<Purchase> findAllOptimized();

}
