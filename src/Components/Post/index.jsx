import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import style from './style.module.css';

export function Post({author, publishedAt, content}) {
    
    const [newCommentText, setNewCommentText] = useState('')
    
    const [comments, setComments] = useState([
       'Cool',
    ])
    
    const handleNewCommentChange = (e) => {
        e.target.setCustomValidity('')
        setNewCommentText(e.target.value);
    }
    
    const handleAddNewComment = (e) => {
        e.preventDefault()
        
        setComments([...comments, newCommentText])
        
        setNewCommentText('')
    }
    
    const handleInvalidText = (e) => {
        e.target.setCustomValidity('Este campo é obrigatório!')
    }
    
    const isInvalidText = newCommentText.length === 0

    const formatedDate = format(
        publishedAt, 
        "dd 'de' LLLL 'de' yyyy 'às' HH:mm'h'", {
            locale: ptBR
        },
    )

    const distancePublicationDateToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const deleteComment = (commentForDelete) => {
        const newListWithoutDeletedComment = comments.filter(comment => comment !== commentForDelete)
        setComments(newListWithoutDeletedComment)
    }

    const setContentLineByType = (line) => {
        return line.type === 'paragraph' ? 
            <p key={line.content}>{line.content}</p> : 
            <a href="#" key={line.content}>{line.content}</a>
    }

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
                    {
                        content.map(setContentLineByType)
                    }
                </div>
            </article>
            <article>
                <form onSubmit={handleAddNewComment} className={style.commentText}>
                    <label htmlFor="commentText">Deixe seu comentário</label>
                    <textarea 
                        name="commentText" 
                        id="commentText"
                        onChange={handleNewCommentChange}
                        value={newCommentText}
                        onInvalid={handleInvalidText}
                        required
                    />
                    <footer>
                        <button type='submit' disabled={isInvalidText}>
                            Publicar
                        </button>
                    </footer>
                </form>
            </article>
            {
                comments.map(comment => {
                    return <Comment
                    key={comment} 
                        content={comment}
                        onDeleteComment={deleteComment}
                    />
                })
            }
        </section>
    )
}