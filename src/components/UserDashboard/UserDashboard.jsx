import { Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import ActivityFeed from "../ActivityFeed.jsx/ActivityFeed";
import UserGroups from "../UserGroups/UserGroups";

const UserDashboard = () => {
  return (
    <div id="user-dashboard-wrapper" className="flex">
        <UserGroups />
        <ActivityFeed />
    </div>
  );
};

export default UserDashboard;
