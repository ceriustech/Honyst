import React, { useState, useEffect } from "react";
import { db } from "../Firebase";
import styled from "styled-components";
import { rgba } from "polished";

// remove this it's just for some basic content
const CONTACTS = [
  {
    _id: "5f62f64147578bb5ad683095",
    index: 0,
    guid: "20fdf7d0-87aa-4073-a931-0b10510b3e57",
    isActive: true,
    balance: "$2,863.96",
    picture: "http://placehold.it/32x32",
    name: {
      first: "Carrillo",
      last: "Ford",
    },
    email: "carrillo.ford@undefined.org",
    phone: "+1 (872) 599-3350",
    address: "557 Trucklemans Lane, Ryderwood, Missouri, 4260",
  },
  {
    _id: "5f62f641b60c90675c1e2655",
    index: 1,
    guid: "65f78296-91e7-46dd-af11-50fcd23448df",
    isActive: true,
    balance: "$3,926.99",
    picture: "http://placehold.it/32x32",
    name: {
      first: "Leanna",
      last: "Hubbard",
    },
    email: "leanna.hubbard@undefined.biz",
    phone: "+1 (884) 450-2994",
    address: "841 Batchelder Street, Cade, Texas, 6064",
  },
  {
    _id: "5f62f6417b1f1b50ddbe74d7",
    index: 2,
    guid: "bb31c626-8e41-4542-bfc7-8318b2f5d4bc",
    isActive: true,
    balance: "$3,022.21",
    picture: "http://placehold.it/32x32",
    name: {
      first: "Cheryl",
      last: "Case",
    },
    email: "cheryl.case@undefined.tv",
    phone: "+1 (868) 403-2835",
    address: "939 Delmonico Place, Sutton, California, 5059",
  },
  {
    _id: "5f62f641f315fdb9fe0a385f",
    index: 3,
    guid: "63411c9e-1d22-40c6-acde-4eb666658d70",
    isActive: false,
    balance: "$3,218.58",
    picture: "http://placehold.it/32x32",
    name: {
      first: "Marshall",
      last: "Martinez",
    },
    email: "marshall.martinez@undefined.net",
    phone: "+1 (916) 407-3440",
    address: "435 Sedgwick Street, Dotsero, Northern Mariana Islands, 1699",
  },
  {
    _id: "5f62f6411f276e8958be0d61",
    index: 4,
    guid: "f0b059d4-9af2-4bec-be89-568b01dc80d3",
    isActive: true,
    balance: "$3,238.70",
    picture: "http://placehold.it/32x32",
    name: {
      first: "Daniels",
      last: "Castillo",
    },
    email: "daniels.castillo@undefined.me",
    phone: "+1 (937) 559-2216",
    address: "311 Hicks Street, Eastmont, Utah, 6229",
  },
  {
    _id: "5f62f641124347523db61e67",
    index: 5,
    guid: "4e683906-8a7c-4a75-8089-a9f1091077b5",
    isActive: true,
    balance: "$1,553.58",
    picture: "http://placehold.it/32x32",
    name: {
      first: "Mercer",
      last: "Buck",
    },
    email: "mercer.buck@undefined.co.uk",
    phone: "+1 (920) 520-2817",
    address: "890 Lefferts Avenue, Bennett, Kentucky, 2493",
  },
  {
    _id: "5f62f641c138ad5c56dbb5a1",
    index: 6,
    guid: "b1674cd9-77d3-4f6c-a435-2b012529dea6",
    isActive: false,
    balance: "$2,755.18",
    picture: "http://placehold.it/32x32",
    name: {
      first: "Eloise",
      last: "Richards",
    },
    email: "eloise.richards@undefined.com",
    phone: "+1 (882) 544-3033",
    address: "401 Elm Place, Baker, Maine, 2864",
  },
];

const Layout = styled.div`
  position: absolute;
  top: 16px;
  bottom: 17px;
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.colors.primary};
  width: calc(100% - 164px);
  height: calc(100% - 33px);
  display: flex;
  border-radius: 20px;
`;

const ChatFeed = styled.div`
  display: flex;
  flex-direction: column;
  flex: 10;
  width: 100%;
  justify-content: flex-end;
`;

const Message = styled.form`
  display: flex;
  justify-content: space-between;
  input {
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-top: 2px solid ${(props) => props.theme.colors.pHover};
    padding: 16px;
    background-color: transparent;
    &:focus {
      outline: none;
    }
  }
  button {
    background-color: ${(props) => props.theme.colors.secondary};
    border: none;
    border-top: 2px solid ${(props) => props.theme.colors.pHover};
    color: white;
    padding: 8px 32px;
    &:hover {
      background-color: ${(props) => props.theme.colors.sHover};
      cursor: pointer;
    }
  }
`;

const ContactsList = styled.ul`
  box-sizing: border-box;
  width: 100%;
  min-width: 16vw;
  flex: 2;
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 2px solid ${(props) => props.theme.colors.pHover};
`;
const ContactCard = styled.li`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 6px;
  padding: 8px;
  margin: 8px;
  &:hover {
    background-color: ${(props) => rgba(props.theme.colors.sHover, 0.5)};
    cursor: pointer;
  }
  span {
    color: ${(props) =>
      props.isActive ? props.theme.colors.secondary : props.theme.colors.error};
  }
`;
const ChatMsg = styled.div`
  width: 100%;
  padding: 8px 16px;
  span {
    color: ${(props) =>
      props.owner === "me"
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
  }
  p {
  }
`;

function Contacts({ data }) {
  return (
    <ContactsList>
      {data.map((user) => (
        <ContactCard key={user._id} isActive={user.isActive}>
          <h4>{`${user.name.first} ${user.name.last}`}</h4>
          <h5>Current Balance: {user.balance}</h5>
          <span>{user.isActive ? "Online" : "Offline"}</span>
        </ContactCard>
      ))}
    </ContactsList>
  );
}

function Messages({ children }) {
  const [message, setMessage] = useState({ msg: "" });
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    const unsub = db
      .collection("chat")
      .orderBy("time")
      .onSnapshot((ss) => {
        const allMsgs = ss.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFeed(allMsgs);
      });
    return () => {
      unsub();
    };
  }, []);
  return (
    <>
      <Layout>
        <ChatFeed>
          {feed.map((msg, i) => (
            <ChatMsg key={i} owner={msg.user}>
              <span>{msg.user}</span>
              <p>{msg.msg}</p>
            </ChatMsg>
          ))}
          <Message
            onSubmit={(e) => {
              e.preventDefault();
              db.collection("chat").add(message);
              setMessage({ msg: "" });
            }}
          >
            <input
              type="text"
              placeholder="Write message here..."
              value={message.msg}
              // we need to get a user to add here
              onChange={(e) =>
                setMessage({
                  user: "me",
                  msg: e.target.value,
                  time: Date.now(),
                })
              }
            />
            <button>Send</button>
          </Message>
        </ChatFeed>
        <Contacts data={CONTACTS} />
      </Layout>
    </>
  );
}
export default Messages;
