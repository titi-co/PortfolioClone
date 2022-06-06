import { LoadingContainer } from "./style";
import { useContext, useEffect } from "react";
import Lottie from "react-lottie";
import loadingContext from "../contexts/loadingContext";

function Loading() {
  const { loadingState, setLoading } = useContext(loadingContext);

  useEffect(() => {
    setTimeout(() => setLoading("end"), 1500);
  }, [setLoading, loadingState]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: require("./loading.json"),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <LoadingContainer
      animate={{
        top: loadingState === "initial" ? 0 : "-100vh",
      }}
      transition={{ duration: 1 }}
    >
      <Lottie options={defaultOptions} height={400} width={400} autoplay />
    </LoadingContainer>
  );
}

export default Loading;
