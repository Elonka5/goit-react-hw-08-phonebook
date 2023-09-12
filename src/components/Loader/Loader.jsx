import { CirclesWithBar } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <CirclesWithBar
      visible={true}
      height="240"
      width="240"
      color="#4d69a9"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
};
