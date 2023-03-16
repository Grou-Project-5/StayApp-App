import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Deact.css";
import { getProfile } from "utils/Datatypes";
import axios from "axios";
import { useCookies } from "react-cookie";
import withReactContent from "sweetalert2-react-content";
import Swal from "utils/Swal";

const DeactivateAcc = () => {
  const [deactInput, setDeactInput] = useState<string>("");
  const [cookie, removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const handleDeleteUser = async () => {
    axios
      .delete("http://54.255.147.31/users", {
        headers: {
          Authorization: `Bearer ${checkToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { message } = res.data;

        MySwal.fire({
          title: "User Been Deleted",
          text: message,
          showCancelButton: false,
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleDeleteUser();
  }, []);

  return (
    <>
      <div className="w-full bg-white h-screen flex flex-col justify-center mx-auto">
        <h1 className="title-deact">Deactivate Account</h1>
        <p className="deact-paragraf">
          Deactivating your account will permanently remove all your information
          from our platform. Your account cannot be reactivated. If you're sure
          you want to deactivate, select the 'Deactivate Account' button. If you
          have any issues, please let us know before deactivating.
        </p>
        <div className="flex flex-row mx-auto mt-8">
          {/* The button to open modal */}
          <label
            htmlFor="my-modal-4"
            className="btn "
            style={{
              backgroundColor: "#d93333",
              marginTop: "1rem",
              borderRadius: "10px",
              color: "white",
              border: "none",
              fontFamily: "Poppins",
            }}
          >
            Deactivate Account
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-4" className="modal-toggle" />
          <label htmlFor="my-modal-4" className="modal cursor-pointer ">
            <label className="modal-box relative bg-white p-12" htmlFor="">
              <p className="py-4 text-black">
                Confirm account deactivation by typing 'DEACTIVATE' and clicking
                'Deactivate Account' button. This is permanent. Please be sure
                before proceeding. Contact us if you have any questions
              </p>
              <input
                type="text"
                placeholder={`Type "DEACTIVATE"`}
                className="input w-full "
                onChange={(e: any) => setDeactInput(e.target.value)}
              />
              {deactInput === "DEACTIVATE" ? (
                <>
                  <button
                    className="btn btn-wide disabled:cursor-not-allowed disabled:bg-slate-300"
                    style={{
                      backgroundColor: "#d93333",
                      border: "none",
                      color: "white",
                      borderRadius: "10px",
                      marginTop: "1rem",
                    }}
                    onClick={() => handleDeleteUser()}
                  >
                    Deactivate Account
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-wide disabled:cursor-not-allowed disabled:bg-slate-300"
                    style={{
                      backgroundColor: "grey",
                      border: "none",
                      color: "white",
                      borderRadius: "10px",
                      marginTop: "1rem",
                    }}
                    disabled
                  >
                    Deactivate Account
                  </button>
                </>
              )}
            </label>
          </label>
          <Link to="/profile">
            <button
              className="btn"
              style={{
                marginTop: "1rem",
                borderRadius: "10px",
                color: "white",
                marginLeft: "1rem",
                width: "100px",
              }}
            >
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DeactivateAcc;
