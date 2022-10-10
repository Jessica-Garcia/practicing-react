import { PencilLine } from 'phosphor-react';
import style from './style.module.css';

export function Sidebar() {
    return (
        <aside className={style.container}>
            <header className={style.header}>
                <img 
                    className={style.coverImg}
                    src="https://images.unsplash.com/photo-1664999407875-b4d94999f9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60&h=800"
                />
            </header>
            <img 
                className={style.profileImg} 
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60&h=500"
            />
            <strong>Name</strong>
            <span>Role</span>
            <footer className={style.footer}>
                <a href="#"><PencilLine size={22} weight={'bold'}/> Editar Perfil</a>
            </footer>
        </aside>
    )
}