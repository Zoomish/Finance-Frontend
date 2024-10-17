import { FC, useState } from 'react'
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import { api } from '../api/axios.api'
import CategoryModal from '../components/CategoryModal'
import { ICategory } from '../types/Category'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const categoriesAction = async ({ request }: any) => {
    const formData = await request.formData()
    switch (request.method) {
        case 'POST': {
            const category = {
                title: formData.get('title'),
            }
            await api.post('/category', category)
            return null
        }
        case 'PATCH': {
            const category = {
                title: formData.get('title'),
                id: formData.get('id'),
            }
            await api.put(`/category/category/${category.id}`, category)
            return null
        }
        case 'DELETE': {
            const id = formData.get('id')
            await api.delete(`/category/category/${id}`)
            return null
        }
    }
}

export const categoryLoader = async () => {
    const { data } = await api.get<ICategory[]>('/category')
    return data
}

const Categories: FC = () => {
    const [visibleModal, setVisibleModal] = useState<boolean>(false)
    const categories = useLoaderData() as ICategory[]
    return (
        <>
            <div className="mt-10 p-4 rounded-md bg-slate-400">
                <h1>Your category list: </h1>
                <div className="flex mt-2 items-center gap-2 flex-wrap">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group py-2 px-4 rounded-lg bg-blue-600 flex items-center relative gap-2"
                        >
                            {category.title}
                            <div className="absolute hidden rounded-lg px-3 left-0 top-0 bottom-0 right-0 bg-black/90 items-center justify-between group-hover:flex">
                                <button>
                                    <AiFillEdit />
                                </button>
                                <Form
                                    className="flex"
                                    method="delete"
                                    action="/categories"
                                >
                                    <input
                                        type="hidden"
                                        name="id"
                                        value={category.id}
                                    />
                                    <button type="submit">
                                        <AiFillCloseCircle />
                                    </button>
                                </Form>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={() => setVisibleModal(true)}
                    className="mt-5 max-w-fit flex items-center gap-2 text-white/50 hover:text-white"
                >
                    <FaPlus />
                    <span>Add new category</span>
                </button>
            </div>
            {visibleModal && (
                <CategoryModal type="post" setVisibleModal={setVisibleModal} />
            )}
        </>
    )
}

export default Categories
