import style from './style.module.css'
import { HandsClapping, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';

export function Comment ({content}) {
    return (
        <>
            <article className={style.commentsContainer}>
                <div className={style.oneCommentContainer}>

                    <Avatar 
                        hasBorder={false}
                        src="https://images.unsplash.com/photo-1583813611092-d9158078a457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60h=500"
                    />
                    <div className={style.commentContent}>
                        <div className={style.comment}>
                            <div className={style.commentInfo}>
                                <div className={style.nameAndTimeContainer}>
                                    <strong>Name</strong>
                                    <time title="29 de setembro às 10:24h" dateTime="2022-09-29 10:24:32">
                                        Há 1 hora
                                    </time>
                                </div>
                                <Trash size={24}/>
                            </div>
                            <p>{content}</p>

                        </div>
                        <div className={style.likes}>
                            <button>
                                <HandsClapping size={20}/>
                                Aplaudir
                                <span>20</span>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}
