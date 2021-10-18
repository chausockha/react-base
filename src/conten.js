import { useState, useEffect } from 'react';

// 1. useEffect(callback)
// - Goi callback moi khi component re-render
// - Goi callback sau khi component them element vao dom
// 2. useEffect(callback, [])
// - Chi gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback,[deps]) 
// - callback sẽ được gọi lại mỗi khi deps thay dổi 

//---------
//1. callback luon luon duoc goi sau khi component mounted
function Content() {
    const [content, setContent] = useState('');
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(value => {
            console.log(value);
            setPost(value)
        });
    }, []);

    return (
        <div>
            <input value={content} onChange={(e) => setContent(e.target.value)}></input>
            <ul>
                {post.map((post) =>

                    <li key={post.id}>{post.title}</li>
                )}
            </ul>

        </div>



    )
}

export default Content