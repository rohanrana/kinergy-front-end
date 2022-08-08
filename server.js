// require("@babel/register")({
//     presets: ["@babel/preset-env"]
//   });

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const app = express();


const dbconnection = require("./db_handler/mongodb");


const staff = require("./models/staffModel");
const config = require("./config/env/config");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
const countryStateCityRoutes = require("./routes/countryStateCityRoutes");
const roleRoutes = require("./routes/roleRoute");

const serviceRoutes = require("./routes/serviceRoute");
const staffRoutes = require("./routes/staffRoute");
const customerRoutes = require("./routes/customerRoute");
const employeeRoutes = require("./routes/employeeRoutes");
const facilityRoutes = require("./routes/facilityRoute");
const taxRoutes = require("./routes/taxRoute");
const appointmentRoutes = require("./routes/appointmentRoute");
const billableItemRoutes = require("./routes/billableItemsRoute");
const inventoryRoutes = require("./routes/inventoryRoute");
const departmentRoutes = require("./routes/departmentRoute");
const serviceCategoryRoutes = require("./routes/serviceCategoryRoute");

const settingRoutes = require("./routes/settingRoute");

const messageRoutes = require("./routes/messageRoute");
const formRoutes = require("./routes/formRoute");
const couponRoutes = require("./routes/couponRoute");
const profileRoutes = require("./routes/profileRoute");

const accessLevelRoutes = require("./routes/accessLevelRoute");
const accessLevelGroupsRoutes = require("./routes/accessLevelGroupRoute");
const accessLevelFeatureRoutes = require("./routes/accessLevelFeatureRoute");
const accessLevelPermissionRoutes = require("./routes/accessLevelPermissionRoute");

const optionsRoutes = require("./routes/optionRoute");
const insuranceRoutes = require("./routes/insuranceRoute");
const documentRoutes = require("./routes/documentRoute");
const blockCalenderRoutes = require("./routes/blockCalenderRoute");
const availabilityCalenderRoutes = require("./routes/availabilityCalenderRoute");
const scheduleCalenderRoutes = require("./routes/scheduleCalenderRoute");


const environment = config();

app.use(express.static(__dirname + '/'));

app.listen(environment.port, () => {
  console.log(`Server is running on ${environment.port}`);
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(cors());
app.use("/api/v1/Country", countryStateCityRoutes);
app.use("/api/v1/role", roleRoutes);

app.use("/api/v1/staff", staffRoutes);
app.use("/api/v1/customer", customerRoutes);
app.use("/api/v1/employee", employeeRoutes);
app.use("/api/v1/facility", facilityRoutes);
app.use("/api/v1/tax", taxRoutes);

app.use("/api/v1/billableItems", billableItemRoutes);
app.use("/api/v1/appointments", appointmentRoutes);
app.use("/api/v1/inventory", inventoryRoutes);
app.use("/api/v1/department", departmentRoutes);

app.use("/api/v1/service", serviceRoutes);
app.use("/api/v1/service/category", serviceCategoryRoutes);
// app.use('/api/v1/service/subService', subServiceRoutes);

app.use("/api/v1/setting", settingRoutes);

app.use("/api/v1/message", messageRoutes);

app.use("/api/v1/form/", formRoutes);
app.use("/api/v1/coupon/", couponRoutes);
app.use("/api/v1/profile/", profileRoutes);

app.use("/api/v1/accessLevel/", accessLevelRoutes);
app.use("/api/v1/accessLevel/group", accessLevelGroupsRoutes);
app.use("/api/v1/accessLevel/feature", accessLevelFeatureRoutes);
app.use("/api/v1/accessLevel/permission", accessLevelPermissionRoutes);

app.use("/api/v1/options", optionsRoutes);

app.use("/api/v1/insurance", insuranceRoutes);
app.use("/api/v1/document", documentRoutes);

app.use("/api/v1/blockCalender", blockCalenderRoutes);
app.use("/api/v1/scheduleCalender", scheduleCalenderRoutes);
app.use("/api/v1/availabilityCalender", availabilityCalenderRoutes);
// app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  console.log("Server Running");
  //res.sendFile(__dirname + '/dist/index.html')
});
