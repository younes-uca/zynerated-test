package ma.zs.stocky.integration.core.catalog.product;

import com.intuit.karate.junit5.Karate;

public class ProductIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("ProductHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
