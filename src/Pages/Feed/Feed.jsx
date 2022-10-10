import { Header } from '../../Components/Header'
import { Post } from '../../Components/Post'
import { Sidebar } from '../../Components/Sidebar'
import style from './style.module.css'

export function Feed() {
    return (
        <div>
           <Header/>
            <div className={style.container}>
                <Sidebar/>
                <main>
                    <Post/>
                </main>
            </div> 
        </div>
    )
}
