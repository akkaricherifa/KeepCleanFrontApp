import { Fragment } from "react";

const home = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    return (

        <Fragment>
            {loading ? (
                <Loader/>
            ) : (
                <Fragment>
                    <MetaData titlr="KEEPCLEAN" />
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

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
            )}
        </Fragment>
    );
};

export default home;