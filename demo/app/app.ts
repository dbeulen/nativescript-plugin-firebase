﻿import "./bundle-config";
import * as application from 'tns-core-modules/application';

// added this here so we can do some wiring
require("nativescript-plugin-firebase");

application.start({ moduleName: "main-page" });
