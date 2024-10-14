import { FC } from 'react'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai'
import { Form } from 'react-router-dom'

const Categories: FC = () => {
    return (
        <div className="mt-10 p-4 rounded-md bg-slate-400">
            <h1>Your category list</h1>
            <div className="flex mt-2 items-center gap-2 flex-wrap">
                <div className="group py-2 px-4 rounded-lg bg-blue-600 flex items-center relative gap-2">
                    Salary
                    <div className="absolute hidden px-3 left-0 top-0 bottom-0 right-0 bg-black/90 flex items-center justify-between">
                        <button>
                            <AiFillEdit />
                        </button>
                        <Form
                            className="flex"
                            method="delete"
                            action="/categories"
                        >
                            <input type="hidden" value={'Category ID'} />
                            <button type="submit">
                                <AiFillCloseCircle />
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories
