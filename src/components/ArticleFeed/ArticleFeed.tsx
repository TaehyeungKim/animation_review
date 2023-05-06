import styles from './ArticleFeed.module.scss'
import {Link} from 'react-router-dom'
import ArticleFeedHeader from './sub/ArticleFeedHeader'
import ArticleFeedImage from './sub/ArticleFeedImage'
import ArticleFeedContent from './sub/ArticleFeedContent'

interface ArticleFeedProps {
    data: any
}

function ArticleFeed({data}: ArticleFeedProps) {
    return(
        <Link to = {`../post/${data.id}`} relative='path'>
        <article className={styles.article_feed}>
            <ArticleFeedHeader/>
            <ArticleFeedImage url={data.thumbnailImage} image={data.thumbnailImage}/>
            <ArticleFeedContent title={data.mainTitle} like={50000} watch={120000} />
        </article>
        </Link>
    )
}

export default ArticleFeed