import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import 'react-toastify/dist/ReactToastify.css';
import Main from "../components/Main/"
import UploadPage from "../components/UploadPage/"
import Chat from "./Chat"
import { Spin } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppContext } from "../context/AuthContext";
// import PayStripe from "./PayStripe";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [status, setStatusAlert] = useState(null); // setStatusAlert => setStatus
  const [_, setStatus] = useState(null); // will remove in the build open-mint version.
  const [loading, setTxLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicList, setTopicList] = useState([]);

  const notify = () => toast.info(status, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  useEffect(() => {
    if (status) {
      notify()
      setStatus(null)
    }
  }, [status])

  return (
    <div>
      {/* <Spin id="spindiv" tip="Loading..." size="large" spinning={loading}> */}
      <AppContext.Provider value={{selectedTopic, setSelectedTopic, topicList, setTopicList}}>
        <Router>
          <Switch>
            <Route exact path="/">
              <>
                <Navigation />
                <Main setTxLoading={setTxLoading}/>
              </>
            </Route>
            <Route path="/upload">
              <>
                <Navigation />
                <UploadPage setStatus={setStatus} setTxLoading={setTxLoading}/>
              </>
            </Route>
            <Route path="/chat">
              <Chat />
              {/* <Bank setStatus={setStatus} setTxLoading={setTxLoading}/> */}
            </Route>
            <Route path="/pay">
              {/* <PayStripe /> */}
              {/* <Bank setStatus={setStatus} setTxLoading={setTxLoading}/> */}
            </Route>
          </Switch>
        </Router>
      {/* </Spin> */}
      <ToastContainer />
      </AppContext.Provider>
    </div>
  );
};

export default Home;
