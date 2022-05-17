import { ArticleItem } from './ArticleItem';
import articleStyles from '../styles/article.module.css';

export const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
};
