"use client";
import { Fragment } from "react";
const SideBar = () => {
  const toggleSidebar = () => {
    console.log("hi");
    document.querySelector("body").classList.remove("side-content-visible");
  };
  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div className="form-back-drop" onClick={() => toggleSidebar()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => toggleSidebar()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get Appointment</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                toggleSidebar();
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
            <a  target="_blank" href="https://twitter.com/quadro_network">
            <i className="fab fa-x-twitter" />
            </a>
            <a target="_blank" href="https://github.com/quadro-network">
              <i className="fab fa-github" />
            </a>
            <a target="_blank" href="https://discordapp.com/users/1225408886966714388">
            <i className="fa-brands fa-discord"></i>
            </a>
            <a target="_blank" href="https://t.me/quadro_network">
            <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
      </section>
      {/*End Hidden Sidebar */}
    </Fragment>
  );
};
export default SideBar;
