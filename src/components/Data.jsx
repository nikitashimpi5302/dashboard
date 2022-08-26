import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const Data = () => {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState({});
  const [selectedUser, setSelectedUser] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const loadData = (id) => {
    db.collection("medInfoCollection").onSnapshot((snapshot) =>
      snapshot.docs.forEach((doc) => {
        if (doc.id === id) {
          setUserData(doc.data());
        }
      })
    );
  };

  return (
    <div className="flex w-full items-start h-full">
      <div className="flex flex-col w-2/6 shadow-lg p-5 rounded-lg ">
        {users.length > 0 &&
          users.map((user) =>
            user.id === selectedUser ? (
              <div className="flex w-full shadow-xl items-center cursor-pointer select-none mb-5 border-2 border-red-500">
                <div className="text-lg flex flex-col p-5  items-center">
                  <span className="font-semibold">{user.data.name}</span>
                  <span>{user.id}</span>
                </div>
                <span>
                  {user.data.aadhaar == "" ? "N.A." : user.data.aadhaar}
                </span>
              </div>
            ) : (
              <div
                className="flex w-full shadow-xl items-center cursor-pointer select-none mb-5"
                onClick={() => {
                  setSelectedUser(user.id);
                  loadData(user.id);
                }}
              >
                <div className="text-lg flex flex-col p-5  items-center">
                  <span className="font-semibold">{user.data.name}</span>
                  <span>{user.id}</span>
                </div>
                <span>
                  {user.data.aadhaar == "" ? "N.A." : user.data.aadhaar}
                </span>
              </div>
            )
          )}
      </div>
      <div className="flex ml-3 flex-col w-4/6 shadow-lg p-10 rounded-lg border-3 border-red-400 text-lg">
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Aadhaar Number : </span>
          <span className="font-thin">{userData.aadhaarCard}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Age : </span>
          <span className="font-thin">{userData.age}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Area Type : </span>
          <span className="font-thin">{userData.areaType}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Assitive Devices : </span>
          <span className="font-thin">{userData.assistiveDevice}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Category : </span>
          <span className="font-thin">{userData.category}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Disabilities : </span>
          <span className="font-thin">{userData.disability}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">District : </span>
          <span className="font-thin">{userData.district}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Name : </span>
          <span className="font-thin">
            {userData.fName} {userData.mName} {userData.lName}
          </span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Father name : </span>
          <span className="font-thin">{userData.ftName}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Mother Name : </span>
          <span className="font-thin">{userData.mtMame}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Gender : </span>
          <span className="font-thin">{userData.gender}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Mobile Number : </span>
          <span className="font-thin">{userData.mobile}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Occupation : </span>
          <span className="font-thin">{userData.occupation}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Pincode : </span>
          <span className="font-thin">{userData.pincoe}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">POD : </span>
          <span className="font-thin">{userData.pod}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">State : </span>
          <span className="font-thin">{userData.state}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">Tahashil : </span>
          <span className="font-thin">{userData.teshil}</span>
        </div>{" "}
        <div className="mb-3 font-semibold">
          <span classname="font-semibold text-xl">UdId : </span>
          <span className="font-thin">{userData.udid}</span>
        </div>{" "}
        <button
          onClick={() => setModalOpen(true)}
          className="mb-3 font-semibold border border-green-500 w-max mx-auto px-3 py-2 rounded-md text-green-500 cursor-pointer"
        >
          View documents
        </button>
      </div>
    </div>
  );
};

export default Data;
