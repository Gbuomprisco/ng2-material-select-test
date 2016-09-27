"use strict";
var router_1 = require("@angular/router");
var groups_1 = require("./views/groups/groups");
var contacts_1 = require("./views/contacts/contacts");
var appRoutes = [
    { path: 'contacts', component: contacts_1.ContactsView },
    { path: 'uiapp', component: contacts_1.ContactsView },
    { path: '', redirectTo: 'contacts', pathMatch: 'full' },
    { path: 'groups', component: groups_1.GroupsView },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=routing.js.map