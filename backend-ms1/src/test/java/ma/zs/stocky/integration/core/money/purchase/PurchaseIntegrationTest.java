package ma.zs.stocky.integration.core.money.purchase;

import com.intuit.karate.junit5.Karate;

public class PurchaseIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("PurchaseHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
