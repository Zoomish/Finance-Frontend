import { FC } from 'react'

const Categories: FC = () => {
    return (
        <div className="mt-10 p-4 rounded-md bg-slate-400">
            <h1>Your category list</h1>
            <div className="flex mt-2 items-center gap-2 flex-wrap">
                <div className="group py-2 px-4 rounded-lg bg-blue-600 flex items-center relative gap-2"></div>
            </div>
        </div>
    )
}

export default Categories
