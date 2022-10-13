import { Header } from '../../Components/Header'
import { Post } from '../../Components/Post'
import { Sidebar } from '../../Components/Sidebar'
import style from './style.module.css'

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60&h=500",
            name: 'Joan',
            role: 'Yoga Instructor'
        },
        publishedAt: new Date('2022-10-10 20:00:00'),
        content: [
            {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
            {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
            {type: 'Link', content: 'Lorem.ipsum/dolor.'}
        ]
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60&h=500",
            name: 'Joan',
            role: 'Yoga Instructor'
        },
        publishedAt: new Date('2022-10-10 20:00:00'),
        content: [
            {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
            {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
            {type: 'Link', content: 'Lorem.ipsum/dolor.'}
        ]
    },
    {
        id: 3,
        author: {
            avatarUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60&h=500",
            name: 'Joan',
            role: 'Yoga Instructor'
        },
        publishedAt: new Date('2022-10-10 20:00:00'),
        content: [
            {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
            {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
            {type: 'Link', content: 'Lorem.ipsum/dolor.'}
        ]
    }

]

export function Feed() {
    return (
        <div>
           <Header/>
            <div className={style.container}>
                <Sidebar/>
                <main>
                    {
                        posts.map(post => {
                            return (
                                <Post
                                    key={post.id}
                                    author={post.author}
                                    publishedAt={post.publishedAt}
                                    content={post.content}
                                />
                            )
                        })
                    }
                </main>
            </div> 
        </div>
    )
}
