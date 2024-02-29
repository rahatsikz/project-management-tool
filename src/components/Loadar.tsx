import { PuffLoader } from "react-spinners";

const Loader = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const loadingTimeout: any = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  //   return () => clearTimeout(loadingTimeout);
  // }, []);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      {/* {loading ?  */}
      <PuffLoader size={100} color="#2FB9D2" />
      {/* // : null} */}
    </div>
  );
};

export default Loader;
