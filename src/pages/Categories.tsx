import { FC } from 'react'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import { Form } from 'react-router-dom'
import { api } from '../api/axios.api'
import CategoryModal from '../components/CategoryModal'

export const categoriesAction = async ({ request }) => {
    switch (request.method) {
        case 'POST': {
            const formData = await request.formData()
            const category = {
                title: formData.get('title'),
            }
            await api.post('/category', category)
        }
        case 'GET': {
            const categories = await request.json()
        }
    }
}

const Categories: FC = () => {
    return (
        <>
            <div className="mt-10 p-4 rounded-md bg-slate-400">
                <h1>Your category list</h1>
                <div className="flex mt-2 items-center gap-2 flex-wrap">
                    <div className="group py-2 px-4 rounded-lg bg-blue-600 flex items-center relative gap-2">
                        Salary
                        <div className="absolute hidden rounded-lg px-3 left-0 top-0 bottom-0 right-0 bg-black/90 items-center justify-between group-hover:flex">
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
                <button className="mt-5 max-w-fit flex items-center gap-2 text-white/50 hover:text-white">
                    <FaPlus />
                    <span>Add new category</span>
                </button>
            </div>
            <CategoryModal type="post" id={0} setVisibleModal={() => {}} />
        </>
    )
}

export default Categories
