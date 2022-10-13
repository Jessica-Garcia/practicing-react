import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import style from './style.module.css';

export function Post({author, publishedAt, content}) {
    
    const formatedDate = format(
        publishedAt, 
        "dd 'de' LLLL 'de' yyyy 'às' HH:mm'h'",
        {locale: ptBR},
    )

    const distancePublicationDateToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

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
                        <time title={formatedDate} dateTime={publishedAt.toISOString()}>
                            {distancePublicationDateToNow}
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