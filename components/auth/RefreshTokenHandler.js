import { signOut, useSession } from 'next-auth/react';

import { useEffect } from 'react';

const refreshTokenHandler = (props) => {
  const session = useSession();
  useEffect(() => {
    if (!!session) {
      //if (!) {
      //  signOut();
      //}
      console.log(session.data);
      const timeRemaining = Math.round(
        (session.accessTokenExpiry - 30 * 60 * 1000 - Date.now()) / 1000
      );
      props.setInterval(timeRemaining > 0 ? timeRemaining : 0);
    }
  }, [session]);
  return null;
};

export default refreshTokenHandler;
