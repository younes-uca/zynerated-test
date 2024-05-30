package ma.zs.stocky.integration.core.money.purchase-tag;

import com.intuit.karate.junit5.Karate;

public class PurchaseTagIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("PurchaseTagHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
