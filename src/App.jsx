import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Settings from "./pages/Settings.jsx";
import Users from "./pages/Users.jsx";
import Login from "./pages/Login.jsx";
import Account from "./pages/Account.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import GlobalStyles from "./styles/GlobalStyles.js";
import AppLayout from "./ui/AppLayout.jsx";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to={"dashboard"} />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

// *************************These all were for practice of styled Components.****************************//

// import styled from "styled-components";
// import GlobalStyles from "./styles/GlobalStyles.js";
// import { Input } from "./ui/FileInput.jsx";
// import Heading from "./ui/Heading.jsx";
// import Button from "./ui/Button.jsx";
// import Row from "./ui/Row.jsx";

// const StyledApp = styled.div`
//   // background-color: orangered;
//   padding: 20px;
// `;
// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <StyledApp>
//         <Row>
//           <Row type="horizontal">
//             <Heading as="h1">The wild oasis.</Heading>

//             <div>
//               <Heading as="h2">Check in and check out.</Heading>
//               <Button
//                 variation="primary"
//                 size="medium"
//                 onClick={() => {
//                   alert("check in");
//                 }}
//               >
//                 Check in
//               </Button>
//               <Button
//                 variation="secondary"
//                 size="small"
//                 onClick={() => {
//                   alert("check out");
//                 }}
//               >
//                 Check out
//               </Button>
//             </div>
//           </Row>
//           <Row>
//             <Heading as="h3">Form</Heading>
//             <div>
//               <Input type={"number"} placeholder={"Number of guests"} />
//               <Input type={"number"} placeholder={"Number of guests"} />
//             </div>
//           </Row>
//         </Row>
//       </StyledApp>
//     </>
//   );
// }

// export default App;
