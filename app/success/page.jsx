'use client';
import { decode } from 'jsonwebtoken';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { MAX_AGE } from '@/utils/constants';

const Success = () => {
    const router = useRouter();
    const updatedData = {
        isPaid: true,
      };

    const updateUser = async () => {
    const userCookie = Cookies.get('userinfocookie');
    const decodedData = decode(userCookie);
    const {_id} = decodedData;
    const userId = _id;

    try {
        const response = await fetch('/api/Users/upgrade', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId, updatedData }),
        });
  
        if (response.ok) {
            const data = await response.json();
            const token = data.value;
            Cookies.remove('userinfocookie');
            Cookies.set('userinfocookie',token,{expires: MAX_AGE});
            setTimeout(() => {
            router.push(`/dashboard/paidadmin/${userId}`);
        },3000);
        } else {
          console.error('Failed tomupdate user paid status');
        }
      } catch (error) {
        console.error('Error updating user paid status:', error);
      }


    };
    updateUser();
    return(
        <div>Success!!! you upgraded!!!!!!</div>
    );
};

export default Success;