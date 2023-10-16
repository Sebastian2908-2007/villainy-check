

import { useStoreContext } from '@/utils/GlobalState';
import Link from 'next/link';

const PaidAllUsers = () => {
    const [state, dispatch] = useStoreContext();
    console.log(state.admin, "in all users");

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {state.admin.subjects.map((user) => (
                <div key={user._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{user.firstName} {user.lastName}</h3>
                        <p className="text-gray-500 mb-2">
                            Email: <a className="text-indigo-500" href={`mailto:${user.email}`}>{user.email}</a>
                        </p>
                         <Link href={user.quizLink} className="text-indigo-600 hover:underline">
                         Quiz Link
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PaidAllUsers;

