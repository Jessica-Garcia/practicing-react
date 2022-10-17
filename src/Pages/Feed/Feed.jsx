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
            {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicin!'},
            {type: 'paragraph', content: 'Lorem ipsum dolor sit ame adipisicing.'},
            {type: 'Link', content: 'Lorem.ipsum/do-lor.'}
        ]
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60&h=500",
            name: 'Mary',
            role: 'Yoga Instructor'
        },
        publishedAt: new Date('2022-10-9 20:00:00'),
        content: [
            {type: 'paragraph', content: 'Lorem ipsum dolor amet consectetur adipisicing elit.'},
            {type: 'paragraph', content: 'Lorem ipsum  sit amet consectetur adipisicing elit.'},
            {type: 'Link', content: 'Lorem.ips-um/dolor.'}
        ]
    },
    {
        id: 3,
        author: {
            avatarUrl: "https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8TWpZa3RDVEZtWWN8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60&h=500",
            name: 'Mick',
            role: 'Yoga Instructor'
        },
        publishedAt: new Date('2022-10-8 20:00:00'),
        content: [
            {type: 'paragraph', content: 'Lorem dolor sit amet consectetur adipisicing elit.'},
            {type: 'paragraph', content: 'Lorem ipsum dolor sit consectetur adipisicing elit...'},
            {type: 'Link', content: 'Lor-em.ipsum/dolor'}
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
