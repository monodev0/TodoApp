import { onMount, onCleanup, createEffect, createSignal } from 'solid-js'

const Todo = ({content}) => {
    return <div class="w-full py-3 px-4 border-l-3 border-l-gray-900">
        <p>{content}</p>
    </div>
}

const App = () => {
    const [todos, setTodos] = createSignal([])
    const [content, setContent] = createSignal("")
    const addTodo = (content) => {
        setTodos(todos => [
            ...todos,
            { id: todos.length, content }
        ])
    }
    onMount(() => {
        setTodos(JSON.parse(localStorage["_todos_"] || '[]'))
    })
    createEffect(() => {
        localStorage['_todos_'] = JSON.stringify(todos())
    })
    return <div class="w-full h-full grid grid-rows-[auto_1fr_auto]">
        <div class="w-full flex items-center p-3">
            <p class="text-2xl">
                My Todos
            </p>
        </div>
        <div class="w-full h-full overflow-scroll">
            <Show when={todos().length > 0} fallback={<div class="w-full h-full flex items-center justify-center"><p>No Todos</p></div>}>
                <div class="w-full flex flex-col gap-3 py-3 px-4">
                    <For each={todos()}>
                        {todo => <Todo content={todo.content}/>}
                    </For>
                </div>
            </Show>
        </div>
        <div class="w-full grid grid-cols-[1fr_auto] gap-3 p-4">
            <input class="w-full py-2 px-4 border-2 outline-2 border-gray-800 outline-gray-900 rounded" placeholder="Todo Content" onChange={e => setContent(e.target.value)} value={content()}/>
            <button class="py-2 px-6 uppercase bg-gray-900 text-gray-100 rounded active:opacity-70" onClick={() => addTodo(content())}>Add</button>
        </div>
    </div>
}

export default App
