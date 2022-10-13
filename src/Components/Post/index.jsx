import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import style from './style.module.css';

export function Post() {
    return (
        <section className={style.container}>
            <article className={style.post}>
                <header className={style.postInfo}>
                    <div className={style.postAuthor}>
                        <Avatar 
                            hasBorder
                            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60&h=500"
                        />
                        <div className={style.authorInfo}>
                            <strong>Name</strong>
                            <span>Role</span>
                        </div>
                    </div>
                    <div className={style.time}>
                        <time title="29 de setembro às 10:24h" dateTime="2022-09-29 10:24:32">
                            Há 1 hora
                        </time>
                    </div>
                </header>
                <div className={style.postContent}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, non!</p>
                    <a href="#">Lorem.ipsum/dolor.</a>
                </div>
            </article>
            <Comment/>
        </section>
    )
}