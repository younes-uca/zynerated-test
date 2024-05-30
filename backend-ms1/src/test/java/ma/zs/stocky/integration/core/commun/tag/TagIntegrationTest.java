package ma.zs.stocky.integration.core.commun.tag;

import com.intuit.karate.junit5.Karate;

public class TagIntegrationTest {

 @Karate.Test
    Karate saveHappyTest() {
        return Karate.run("TagHappyTest")
                .tags("save")
                .relativeTo(getClass());
    }


}
