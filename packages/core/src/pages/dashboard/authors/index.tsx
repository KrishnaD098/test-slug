import {CNextRequest} from "../../../types";
import BasePage from "../../../components/utils/BasePage";
import ItemLandingPage from "../../../components/dashboard/ItemLandingPage";

export default async (request: CNextRequest) => {
    const db = await request.db()
    const items = await db.authors.find({})

    return <ItemLandingPage items={items.map(item => ({...item, title: item.name}))}
                            itemLinkBasePath={"/api/next-blog/dashboard/authors/"}
                            createUrl={"/api/next-blog/dashboard/authors/create"}
                            createBtnText={"Create Author"}/>
}
