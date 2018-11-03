const Router = ReactRouterDOM.BrowserRouter;
const NavLink = ReactRouterDOM.NavLink;
const Route = ReactRouterDOM.Route; 
ReactDOM.render(<App />, document.querySelector('#root'));


//<Side Panel Navigation>

function SidePanel() {
    return (
        <div className="sidebar-navigation">
            <div className="appTitle">
                <i className="fab fa-houzz"></i><h1>Honyst</h1>
            </div>
            <div className="navList">
                <p className="actionItem"><i className="fas fa-th-large"></i><a className="active actionItem" href="#home">Dashboard</a></p>
                <p className="actionItem"><i className="fas fa-home"></i><NavLink className="active actionItem" to="/properties">Properties</NavLink></p>
                <p className="actionItem"><i className="fas fa-user"></i><a className="actionItem" href="#news">Tenants</a></p>
                <p className="actionItem"><i className="fas fa-angle-double-right"></i><a className="actionItem" href="#about">Transactions</a></p>
                <p className="actionItem"><i className="fas fa-sticky-note"></i><a className="actionItem" href="#contact">Ledger</a></p>
                <p className="actionItem"><i className="fas fa-envelope-open"></i><a className="actionItem" href="#about">Messages</a></p>  
            </div>
        <div className="profile">
            <div className="profilePic"><div className="activeStatus"></div></div>
            <div className="profileInfo">
                <h3>profile name</h3><i className="fas fa-chevron-up"></i>
                <p>profile title</p>
            </div>
        </div>
        </div>
    );
}

//</Side Panel Navigation>

//<Content Area>
function ContentArea() {
   return (
    <div className="content-area">
       <section className="header-section">
        <div className="search-section">
            <i className="fas fa-search"></i>
            <div className="search-container">
                <input type="text" placeholder="Search.."/>
            </div>
            <div className="header-section-tools">
                <div className="tool-wrapper"><span className="left-border"></span><a href="#"><i className="fas fa-bell tool"></i></a></div>
                <div className="tool-wrapper"><span className="left-border"></span><a href="#"><i className="far fa-question-circle tool"></i></a></div>
                <div className="tool-wrapper"><span className="left-border"></span><a href="#"><i className="fas fa-cog tool"></i></a></div>
            </div>
        </div>
      </section>
        
            <div> 
            <Route exact path = "/" component = {Dashboard}/>
            <Route exact path = "/properties" component = {PropertyList}/>
            <Route exact path = "/tenants" component = {PropertyList}/>
            </div>
      </div>
   ); 
}

//Dashboard Section

function Dashboard() {
    return(
    <section className="dashboard-info">
        <div className="dashboard-grid-container">
            <div className="transactions">
                <div className="border">
                    <i className="fas fa-angle-double-right"></i>
                    <h1>Transactions</h1>
                </div>
                
            </div> 
            <div className="properties">
                <div className="border">
                    <i className="fas fa-home"></i>
                    <h1>Properties</h1>
                </div>
            
            </div>
            <div className="tenants">
                <div className="border">
                    <i className="fas fa-user"></i>
                    <h1>Tenants</h1>
                </div>
                
            </div>  
            <div className="ledger">
                <div className="border">
                    <i className="fas fa-sticky-note"></i>
                    <h1>Ledger</h1>
                </div>
            </div>
            <div className="messages">
                <div className="border">
                    <i className="fas fa-envelope-open"></i>
                    <h1>Messages</h1>
                </div>
            </div>
        </div>    
    </section>
    );
}

function PropertyList() {
   return(

        <section className="property-info">
            <div className="property-grid-container">
                <div className="property-1 property-card">
                    <div className="border">
                        <i className="fas fa-home"></i>
                        <h1>555 E Ave</h1>
                    </div>
                    <div className="property-profile">
                        <div className="property-profile-pic"><img src="Img/house-image-1.jpg"/></div>
                    </div>
                    <p><i className="fas fa-dollar-sign"></i>1,250</p>
                    <p><i className="fas fa-bed"></i> <span>2bd 1,200 sqft+</span></p>
                    <p><i className="fas fa-bath"></i> <span>1ba</span></p>
                </div> 
            </div>
        </section>
   ); 
}
//</Content Area Properties>

//<Render Dashboard Section>
function App() {
    return (
        <div className="main">
        <Router>
        <div>
            <div className="sidebar-navigation">
                <SidePanel/>
            </div>
                <ContentArea/>
            <div className="dashboard-info">
                <Dashboard/>
            </div>
        </div>
        </Router>
        </div>      
    );
}
//</Render Dashboard Section>

//<Property Section>
/*function App() {
    return (
        <div className="main">
            <div className="sidebar-navigation">
                <SidePanel/>
            </div>
                <ContentArea/>
        </div>     
    );
}*/
//</Property Section>

