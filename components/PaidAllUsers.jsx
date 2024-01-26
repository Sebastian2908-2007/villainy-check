'use client';

import { useStoreContext } from '@/utils/GlobalState';


const PaidAllUsers = () => {
    const [state, dispatch] = useStoreContext();
    
 let url = window.location.href;
 const domainName = url.split('/dashboard')[0];
    const copyToClipboard = async (e) => {
        try {
            await navigator.clipboard.writeText(`${domainName}/${e.target.value}`);   
          } catch (error) {
            console.error('Failed to copy text: ', error);
          }
     
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {state.admin.subjects && state.admin.subjects.map((user) => (
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
                        <p>
                         Click below to Copy Quiz Link
                         </p>
                         <input 
                        readOnly
                         value={user.quizLink} 
                         className="text-[#fde1e2] 
                        bg-transparent
                         "
                         onClick={copyToClipboard}
                         />
                         
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PaidAllUsers;

