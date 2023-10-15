import { useStoreContext } from '@/utils/GlobalState';

const PaidAllUsers = () => {
    const [state, dispatch] = useStoreContext();
    console.log(state.admin,"in all users");
    return(
<div>All users</div>
    );
};
export default PaidAllUsers;
