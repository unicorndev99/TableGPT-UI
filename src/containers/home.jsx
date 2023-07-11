import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import 'react-toastify/dist/ReactToastify.css';
import Main from "../components/Main/"
import { Spin } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [status, setStatusAlert] = useState(null); // setStatusAlert => setStatus
  const [_, setStatus] = useState(null); // will remove in the build open-mint version.
  const [loading, setTxLoading] = useState(false);

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
      <Spin id="spindiv" tip="Loading..." size="large" spinning={loading}>
        <Navigation />
        <Router>
          <Switch>
            <Route exact path="/">
              <Main setTxLoading={setTxLoading}/>
            </Route>
            <Route path="/hero">
              {/* <Hero setStatus={setStatus} setTxLoading={setTxLoading}/> */}
            </Route>
            <Route path="/bank">
              {/* <Bank setStatus={setStatus} setTxLoading={setTxLoading}/> */}
            </Route>
          </Switch>
        </Router>
      </Spin>
      <ToastContainer />
    </div>
  );
};

export default Home;
