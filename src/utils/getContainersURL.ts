const getContainersURL = ({
  hostname = 'https://server-repack-demo.onrender.com', //:5173',
  appName,
  platform,
}: {
  hostname: string;
  appName: string;
  platform: string;
}) => {
  return `${hostname}/host?platform=${platform}`;
};

export default getContainersURL;
