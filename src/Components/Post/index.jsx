import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import style from './style.module.css';

export function Post({author, publishedAt, content}) {
    return (
        <section className={style.container}>
            <article className={style.post}>
                <header className={style.postInfo}>
                    <div className={style.postAuthor}>
                        <Avatar 
                            hasBorder
                            src={author.avatarUrl}
                        />
                        <div className={style.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>
                    <div className={style.time}>
                        <time title="29 de setembro às 10:24h" dateTime="2022-09-29 10:24:32">
                            há 1 hora
                        </time>
                    </div>
                </header>
                <div className={style.postContent}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, non!</p>
                    <a href="#">Lorem.ipsum/dolor.</a>
                </div>
            </article>
            <article>
                <form className={style.commentText}>
                    <label htmlFor="commentText">Deixe seu comentário</label>
                    <textarea 
                        name="commentText" 
                        id="commentText"
                    />
                    <footer>
                        <button type='submit'>Publicar</button>
                    </footer>
                </form>
            </article>
            <Comment/>
            <Comment/>
            <Comment/>
        </section>
    )
}