package ma.zs.stocky.integration.core.commun.purchase-state;

import com.intuit.karate.junit5.Karate;

public class PurchaseStateIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("PurchaseStateHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
