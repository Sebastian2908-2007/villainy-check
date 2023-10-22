

import { useStoreContext } from '@/utils/GlobalState';
import Link from 'next/link';

const PaidAllUsers = () => {
    const [state, dispatch] = useStoreContext();
    console.log(state.admin.subjects, "in all users");

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {state.admin.subjects.map((user) => (
                <div key={user._id} className="
                bg-[#999595] 
                shadow-lg 
                rounded-lg 
                overflow-hidden
                border
                border-[#fde1e2]
                ">
                    <div className="p-4">
                        <h3 className="text-xl text-[#fde1e2] font-semibold mb-2">{user.firstName} {user.lastName}</h3>
                        <p className="mb-2 text-[#fde1e2]">
                            Email: <a className="text-white" href={`mailto:${user.email}`}>{user.email}</a>
                        </p>
                         <Link href={user.quizLink} className="text-[#fde1e2] underline">
                         Quiz Link
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PaidAllUsers;

