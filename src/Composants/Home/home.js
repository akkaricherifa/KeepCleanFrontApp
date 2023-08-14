import { Fragment } from "react";

const home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.products);

    return (

        <Fragment>
            {loading ? (
                <Loader/>
            ) : (
                <Fragment>
                    <MetaData title="KEEPCLEAN" />
                    <div className="banner">
            <p>Welcome to KEEP CLEAN Application</p>
            <h1>FIND AMAZING TEAM BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          
          <h2 className="homeHeading">Featured Products</h2>

       
        </Fragment>
            )}
        </Fragment>
    );
};

export default home;