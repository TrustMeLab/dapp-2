import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { useAccount } from 'wagmi';
import {IAccount, IUser} from "@types";
import {getUserByAddress} from "@components/modules/anywhere/queries/talent-profile-data";

const UserContext = createContext<{
  user?: IUser;
  account?: IAccount;
}>({
  user: undefined,
  account: undefined,
});

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | undefined>();
  const account = useAccount();

  useEffect(() => {
    const fetchData = async () => {
      if (!account.address || !account.isConnected) {
        return;
      }

      try {
        const response = await getUserByAddress(account.address);
        if (response?.data?.data?.users[0] !== null) {
          setUser(response.data.data.users[0]);
        }
      } catch (err: any) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchData();
  }, [account.address, account.isConnected]);

  const value = useMemo(() => {
    return {
      user,
      account: account ? account : undefined,
    };
  }, [account.address, user?.id]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserProvider };

export default UserContext;
