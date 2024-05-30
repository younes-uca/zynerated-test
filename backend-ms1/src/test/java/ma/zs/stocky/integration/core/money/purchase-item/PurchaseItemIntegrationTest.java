package ma.zs.stocky.integration.core.money.purchase-item;

import com.intuit.karate.junit5.Karate;

public class PurchaseItemIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("PurchaseItemHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
