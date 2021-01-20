// import React from "react";
// import {
//   AppBar,
//   Paper,
//   Toolbar,
//   Grid,
//   InputBase,
//   IconButton,
//   Badge,
//   makeStyles,
// } from "@material-ui/core";
// import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
// import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
// import PageHeader from "../../src/components/PageHeader";
// import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: "#3c44b1;",
//   }
// //   searchInput: {
// //     opacity: "0.6",
// //     padding: `0px ${theme.spacing(1)}px`,
// //     fontSize: "0.8rem",
// //     "&:hover": {
// //       backgroundColor: "#f2f2f2",
// //     },
// //     "& .MuiSvgIcon-root": {
// //       marginRight: theme.spacing(1),
// //     },
// //   },
// }));

// export default function Header() {
//   const classes = useStyles();

//   return (
//     <AppBar position="static" className={classes.root}>
//       <Toolbar>
//         <Grid container alignItems="center">
//           <Grid item>
//             {/* <InputBase
//                             placeholder="Search topics"
//                             className={classes.searchInput}
//                             startAdornment={<SearchIcon fontSize="small" />}
//                         /> */}
//             <PageHeader
//               subTitle="recruitmentmanagement"
//               icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
//             />
//             <Paper className={classes.pageContent}></Paper>
//           </Grid>
//           <Grid item sm></Grid>
//           <Grid item>
//             <IconButton>
//               <Badge badgeContent={4} color="secondary">
//                 <NotificationsNoneIcon fontSize="small" />
//               </Badge>
//             </IconButton>
//             <IconButton>
//               <Badge badgeContent={3} color="primary">
//                 <ChatBubbleOutlineIcon fontSize="small" />
//               </Badge>
//             </IconButton>
//             <IconButton>
//               <PowerSettingsNewIcon fontSize="small" />
//             </IconButton>
//           </Grid>
//         </Grid>
//       </Toolbar>
//     </AppBar>
//   );
// }

import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import PersonIcon from '@material-ui/icons/Person';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container alignItems="center">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <PersonIcon style={{ fontSize: 50 }} />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            RecruitmentManagement
            </Typography>
            <IconButton>
             <PowerSettingsNewIcon fontSize="small" />
             </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
